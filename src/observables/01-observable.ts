import { Observable, Observer } from 'rxjs';

const observer : Observer<any> = {
    next:value => console.log('siguiente [next]: ', value),
    error: error => console.warn('error [obs]:', error),
    complete: () => console.info('completado [obs]')
};

const obs$ = new Observable<string>( subs =>{

    subs.next('hola');
    subs.next('mundo');

    subs.next('hola');
    subs.next('mundo');

    //forzar error
    /* const a = undefined;
    a.nombre = 'Jorge'; */

    subs.complete();

    subs.next('hola');




});

obs$.subscribe( observer );

/* obs$.subscribe( 
    valor => console.log('next: ', valor),
    error => console.log('error ',error),
    () => console.info('completado')
 ); */







