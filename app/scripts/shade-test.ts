import { Shade } from 'js-shade';

console.log(Shade.red().underline('Testing red underline'));
console.log(Shade.underline().red('Testing red underline again'));
console.log(Shade.bright().yellow('Testing Bright yellow'));

// Trying to break it
console.log(Shade.red().blue('Red or blue?')); // Red over-rides
console.log(Shade.bright().dim('Bright or dim?')); // Dim over-rides
console.log(Shade.underline().yellow().bright().reverse('idk')); // bright() has no effect
console.log(Shade.cyan().cyan().cyan('Triple cyans')); // works fine
