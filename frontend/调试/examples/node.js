import { readFile, writeFile } from 'fs/promises';

(async () => {
  const fileContent = await readFile('./package.json', {
    encoding: 'utf-8'
  });

  await writeFile('./package2.json', fileContent);
})();
