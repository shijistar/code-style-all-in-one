import { promises as fs } from 'fs';
import path from 'path';

async function getAllJsFiles(dir: string): Promise<string[]> {
  let files: string[] = [];
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files = files.concat(await getAllJsFiles(fullPath));
    } else if (entry.isFile() && entry.name.endsWith('.js')) {
      files.push(fullPath);
    }
  }
  return files;
}

async function fixModuleExports() {
  const baseDir = path.resolve(__dirname, '../es');
  const jsFiles = await getAllJsFiles(baseDir);
  const exportRegex = /^module\.exports\s*=\s*config;\s*$/gm;
  for (const file of jsFiles) {
    const content = await fs.readFile(file, 'utf8');
    const newContent = content.replace(exportRegex, '');
    if (newContent !== content) {
      await fs.writeFile(file, newContent, 'utf8');
      // console.log(`Fixed: ${file}`);
    }
  }
}

fixModuleExports().catch((err) => {
  console.error(err);
  process.exit(1);
});
