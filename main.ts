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
    export function LeftWheelForward(speed: number): void {
        pins.analogWritePin(ap8, speed)
        pins.digitalWritePin(dp2, 0)
    }
    //% block
    export function LeftWheelBackward(speed: number): void {
        pins.analogWritePin(ap2, speed)
        pins.digitalWritePin(dp8, 0)
    }
    //% block
    export function RightWheelForward(speed: number): void {
        pins.analogWritePin(ap0, speed)
        pins.digitalWritePin(dp1, 0)
    }
    //% block
    export function RightWheelBackward(speed: number): void {
        pins.analogWritePin(ap1, speed)
        pins.digitalWritePin(dp0, 0)
    }
    //% block
    export function LeftTurn(speed: number): void {
        pins.analogWritePin(ap2, speed)
        pins.digitalWritePin(dp8, 0)
        pins.analogWritePin(ap0, speed)
        pins.digitalWritePin(dp1, 0)
    }
    //% block
    export function RightTurn(speed: number): void {
        pins.analogWritePin(ap1, speed)
        pins.digitalWritePin(dp0, 0)
        pins.analogWritePin(ap8, speed)
        pins.digitalWritePin(dp2, 0)
    }
    //% block
    export function MoveBackward(speed: number): void {
        pins.analogWritePin(ap1, speed)
        pins.digitalWritePin(dp0, 0)
        pins.analogWritePin(ap2, speed)
        pins.digitalWritePin(dp8, 0)
    }
    //% block
    export function MoveForward(speed: number): void {
        pins.analogWritePin(ap8, speed)
        pins.digitalWritePin(dp2, 0)
        pins.analogWritePin(ap0, speed)
        pins.digitalWritePin(dp1, 0)
    }
}
