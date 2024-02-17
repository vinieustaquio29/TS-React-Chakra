import { Logou } from './alert'

describe('alert', () =>{

    const mockAlert = jest.fn()
    window.alert = mockAlert
    it('vai tester se o alert disparar quando apertar no button', () =>{
        Logou()
        expect(mockAlert).toBeCalled();

    })
})