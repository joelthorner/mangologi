/**
 * @file Run a script that launches static Fluid or Beyond notifications
 * @author joelthorner
 * @version 1.0.1
 */

if (typeof Fluid !== 'undefined') {
  Fluid.notify('Lorem ispum dolor sit amet', {
    type: 'danger',
    sticky: true,
  });
  Fluid.notify('Lorem ispum dolor sit amet', {
    type: 'success',
    sticky: true,
  });
  Fluid.notify('<ul><li>Lorem ispum dolor sit amet</li><li>Durum kebab mixto</li><li>Con mucha salsa blanca</li></ul>', {
    type: 'success',
    sticky: true,
    title: 'Title lorem ipsum',
  });
} else if (typeof LC !== 'undefined') {
  LC.notify('Lorem ispum dolor sit amet', {
    type: 'danger',
    sticky: true,
  });
  LC.notify('Lorem ispum dolor sit amet', {
    type: 'success',
    sticky: true,
  });
  LC.notify('<ul><li>Lorem ispum dolor sit amet</li><li>Durum kebab mixto</li><li>Con mucha salsa blanca</li></ul>', {
    type: 'success',
    sticky: true,
    title: 'Title lorem ipsum',
  });
}
