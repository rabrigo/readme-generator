const inquirer = require('inquirer')
const fs = require('fs')
inquirer
.prompt([
        {
                type: 'input',
                message: "What's your project called?",
                name: 'title'
        },
        {
                type: 'input',
                message: "How would you describe your project?",
                name: 'description'
        },
        {
                type: 'input',
                message: "What are your instructions for installation?",
                name: 'installation'
        },
        {
                type: 'input',
                message: "What are your instructions for usage?",
                name: 'usage'
        },
        {
                type: 'input',
                message: "What are your instructions for contributing?",
                name: 'contributing'
        },
        {
                type: 'checkbox',
                message: "What licenses would you like to include?",
                choices: [`Apache License 2.0`, `BSD 3-Clause \"New\" or \"Revised\" license`, `MIT`],
                name: 'licenses'
        },
        {
                type: 'input',
                message: "What are your instructions for testing?",
                name: 'testing'
        },
        {
                type: 'input',
                message: "What is your github username?",
                name: 'github'
        },
        {
                type: 'input',
                message: "What is your e-mail?",
                name: 'email'
        }
])
.then((response) => {
        let readmeCode = 
        `### About ${response.title}\n`
        let tableOfContents =

`
<details>
<summary>Table of Contents</summary>
  <ol>
    <li><a href="#description">Description</a></li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>
`
const restOfPage = 

`
## Description

${response.description}

## Installation

${response.installation}

## Usage

${response.usage}
`

let licenses =
`## Licenses\n`

if (response.licenses.includes('Apache License 2.0')) {
        licenses += 
        `
        Copyright [yyyy] [name of copyright owner]

        Licensed under the Apache License, Version 2.0 (the "License");
        you may not use this file except in compliance with the License.
        You may obtain a copy of the License at
     
          http://www.apache.org/licenses/LICENSE-2.0
     
        Unless required by applicable law or agreed to in writing, software
        distributed under the License is distributed on an "AS IS" BASIS,
        WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
        See the License for the specific language governing permissions and
        limitations under the License.\n
        `
}

if (response.licenses.includes(`BSD 3-Clause \"New\" or \"Revised\" license`)) {
        licenses += 
        `
        Copyright <YEAR> <COPYRIGHT HOLDER>

        Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
        
        1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
        
        2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
        
        3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
        
        THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
        `
}

if (response.licenses.includes('MIT')) {
        licenses += 
        `
        MIT License
        
        Copyright (c) <YEAR> <COPYRIGHT HOLDER>
        
        Permission is hereby granted, free of charge, to any person obtaining a copy
        of this software and associated documentation files (the "Software"), to deal
        in the Software without restriction, including without limitation the rights
        to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
        copies of the Software, and to permit persons to whom the Software is
        furnished to do so, subject to the following conditions:
        
        The above copyright notice and this permission notice shall be included in all
        copies or substantial portions of the Software.
        
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
        IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
        FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
        LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
        OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
        SOFTWARE.\n
        `
}

const restOfPage2 =
`
## Contributing

${response.contributing}

## Testing

${response.testing}

## Questions/Contact

If you have any questions you can contact me at ${response.email}. <br>
You can view my GitHub at: https://github.com/${response.github}
`
        fs.writeFile(`./output/readme.md`, readmeCode + tableOfContents + restOfPage + licenses + restOfPage2, (err) => {
                if (err) {
                  console.log(err)
                } else {
                  console.log("File written successfully\n");
                }
              })
        })
.catch((err) => console.error(err))