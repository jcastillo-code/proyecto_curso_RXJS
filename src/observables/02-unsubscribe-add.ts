import { Observable, Observer } from 'rxjs';

const observer : Observer<any> = {
    next:value => console.log('siguiente [next]: ', value),
    error: error => console.warn('error [obs]:', error),
    complete: () => console.info('completado [obs]')
};

const intervalo$ = new Observable<number>( subs =>{
    
    //crear un contador 1,2,3......
    let i = 1
    const interval = setInterval( () =>{
        subs.next(i++)
        //console.log(i);
    }, 1000);

    setTimeout( () =>{
        subs.complete();
    },2500 );

    return () => {
        clearInterval(interval);
        console.log('intervalo interno destruido');
    }

});

const subs1 = intervalo$.subscribe( observer );
const subs2 = intervalo$.subscribe( observer );
const subs3 = intervalo$.subscribe( observer );

subs1.add(subs2)
        .add(subs3);

setTimeout( () =>{

    subs1.unsubscribe()
    /* subs2.unsubscribe()
    subs3.unsubscribe() */

    console.log('Completado timeout');

},6000);