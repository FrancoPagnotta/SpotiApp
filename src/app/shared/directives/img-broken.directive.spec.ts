import { ElementRef } from '@angular/core';
import { ImgBrokenDirective } from './img-broken.directive';

// La prueba de ImgBroken es la siguiente
describe('ImgBrokenDirective', () => { // Describe lo que hace es especificar el nombre de la prueba que vamos a hacer e inciar dentro de una funcion flecha, todos los test. En este caso la prueba se llama ImgBroken porque hace referencia a esa directiva, pero podria ponerle el nombre que quiera.

  // Esta es la primer prueba y es que debe instanciarse correctamente
  it('should create an instance', () => {
    const mockElement: ElementRef = new ElementRef(''); //  Esto fue lo que agregamos para resolver el error que nos decia que no estabamos pasando un argumento de tipo ElementRef en img-broken.directive.ts 
    const directive = new ImgBrokenDirective(mockElement);
    expect(directive).toBeTruthy();
  });
});
