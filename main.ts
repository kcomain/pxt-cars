//% weight=100 color=#5abcab icon=""
//        >>
namespace cars {
    let ap0 = AnalogPin.P0
    let ap1 = AnalogPin.P1
    let ap2 = AnalogPin.P2
    let ap8 = AnalogPin.P8
    
    let dp0 = DigitalPin.P0
    let dp1 = DigitalPin.P1
    let dp2 = DigitalPin.P2
    let dp8 = DigitalPin.P8
    /**
     * TODO: describe your function here
     * @param StopAll degfjkhbghsdngfdnfsd DESPACITO
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     */
    //% block
    export function StopAll(): void {
        pins.analogWritePin(ap0, 0)
        pins.analogWritePin(ap1, 0)
        pins.analogWritePin(ap2, 0)
        pins.analogWritePin(ap8, 0)
    }

    //% block
    export function LeftWheelForward(): void {
        pins.analogWritePin(ap8, 500)
        pins.digitalWritePin(dp2, 0)
    }
    //% block
    export function LeftWheelBackward(): void {
        pins.analogWritePin(ap2, 500)
        pins.digitalWritePin(dp8, 0)
    }
    //% block
    export function RightWheelForward(): void {
        pins.analogWritePin(ap0, 500)
        pins.digitalWritePin(dp1, 0)
    }
    //% block
    export function RightWheelBackward(): void {
        pins.analogWritePin(ap1, 500)
        pins.digitalWritePin(dp0, 0)
    }
    //% block
    export function LeftTurn(): void {
        pins.analogWritePin(ap2, 500)
        pins.digitalWritePin(dp8, 0)
        pins.analogWritePin(ap0, 500)
        pins.digitalWritePin(dp1, 0)
    }
    //% block
    export function RightTurn(): void {
        pins.analogWritePin(ap1, 500)
        pins.digitalWritePin(dp0, 0)
        pins.analogWritePin(ap8, 500)
        pins.digitalWritePin(dp2, 0)
    }
    //% block
    export function MoveBackward(): void {
        pins.analogWritePin(ap1, 500)
        pins.digitalWritePin(dp0, 0)
        pins.analogWritePin(ap2, 500)
        pins.digitalWritePin(dp8, 0)
    }
    //% block
    export function MoveForward(): void {
        pins.analogWritePin(ap8, 500)
        pins.digitalWritePin(dp2, 0)
        pins.analogWritePin(ap0, 500)
        pins.digitalWritePin(dp1, 0)
    }
}
