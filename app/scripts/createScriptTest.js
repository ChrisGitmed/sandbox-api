import Yargs from 'yargs';
const { argv } = Yargs(process.argv.slice(2));

/**
 * {DESCRIPTION}
 *
 * Invoke the script like this:
 * node app/scripts/createScriptTest.js --run
 *
 * @param {*} run - The run flag
 */
const createScriptTest = async (run) => {
  console.log(`${run ? 'REAL' : 'DRY'} RUN\n`);

  try {
    // If dry run
    if (!run) {
      console.log('Use \'--run\' to {DO STUFF}.');
      return;
    }

    // Real run


    console.log('Fin\n');
  } catch (err) {
    console.error('An error occurred: ', err);
  }
};

(async () => {
  await createScriptTest(argv.run);
  process.exit(0);
})();

