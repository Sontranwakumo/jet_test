import {sum} from './sum';



describe('sum less than 100',()=>{
    beforeEach(()=>{
        console.log("Do sth begin");
    })
    afterEach(()=>{
        console.log("Do sth after");
    })
    test('tescase 1', () =>{
        expect(sum(1,2)).toBe(3);
    });
    test('tescase 2', () =>{
        expect(sum(10,20)).toBe(30);
    });
    test('tescase 3', () =>{
        expect(sum(19,2)).toBe(21);
    });
    test('tescase 4', () =>{
        expect(sum(13,2)).toBe(15);
    });
    test('tescase 5', () =>{
        expect(sum(-51,2)).toBe(-49);
    });

})