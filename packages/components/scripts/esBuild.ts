/*
 * @Author: Lily lily.song@hrtps.com
 * @Date: 2023-05-29 10:04:46
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-06-03 22:38:11
 * @FilePath: /theseus-cooperation/Users/hrtps/Documents/Projects/pink-ui/packages/components/scripts/esBuild.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import fs from "fs-extra"
import path from "path"
import {config, UserConfigWithOutDir} from "../vite.config"
import { build, InlineConfig, defineConfig, UserConfig } from "vite"
import { fileURLToPath } from 'node:url'
import { dirname } from 'node:path'
// 获取 __filename 的 ESM 写法
const __filename = fileURLToPath(import.meta.url)
// 获取 __dirname 的 ESM 写法
const __dirname = dirname(fileURLToPath(import.meta.url))

const moduleNames: string[] = []
const buildAll = async () => {

    const srcDir = path.resolve(__dirname, "../src/");
    // console.log('--srcDir---', srcDir)
    fs.readdirSync(srcDir)
        .filter((name) => {
            // console.log('--name1---', name)
            // 只要目录不要文件，且里面包含index.ts
            const componentDir = path.resolve(srcDir, name);
            const isDir = fs.lstatSync(componentDir).isDirectory();
            // console.log('--isDir---', isDir)
            // console.log('--componentDir---', componentDir)
            return isDir && fs.readdirSync(componentDir).includes("index.tsx");
        })
        .map((name) => {
            moduleNames.push(name)
            return name
        })
        .forEach(async (name) => {
            console.log('--name2---', name)
            const outDir = path.resolve(config.build.outDir + '/es', name);
            const custom = {
                lib: {
                    entry: path.resolve(srcDir, name),
                    name, // 导出模块名
                    fileName: `index`,
                    formats: [`es`],
                },
                outDir,
            };
            // console.log('--custom---', custom)
            const eachBuild ={...config.build, ...custom}
            const eachConfig = {...config, build: eachBuild}
            //onsole.log('--eachConfig---', JSON.stringify(eachConfig))
            // console.log('--eachConfig---', eachConfig)
            await build(defineConfig(eachConfig as UserConfig) as InlineConfig);
            

            // fs.outputFile(
            //     path.resolve(outDir, `index.js`),
            //     `{
            //         "name": "@pink-ui/components/${name}",
            //         "main": "index.js",
            //         "module": "index.js"
            //     }`,
            //     `utf-8`
            // );
        });
        console.log('-moduleNames--', moduleNames)
        const indexContent: string = moduleNames.reduce((pre: string, cur: string) => {
            return `    ${pre}
                        export { default as ${cur} } from './${cur}'
                    `
        }, '')
        fs.outputFile(
                path.resolve(config.build.outDir + '/es', `index.js`),
                indexContent,
                `utf-8`
            );
        


    
};

buildAll();