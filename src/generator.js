const fs = require("fs");
const path = require("path");

function createNestedFolders(baseDir, depth) {
    let currentDir = baseDir;
    for (let i = 1; i <= depth; i++) {
        currentDir = path.join(currentDir, `Level${i}`);
        if (!fs.existsSync(currentDir)) {
            fs.mkdirSync(currentDir);
            fs.writeFileSync(path.join(currentDir, `Component${i}.js`), `// Component for Level ${i}`);
        }
    }
}

const projectDir = path.join(__dirname, "src", "Nested");
createNestedFolders(projectDir, 10);
