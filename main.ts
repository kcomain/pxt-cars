//% weight=100 color=#5abcab icon=""
//        >>

// //[%] v.min=0 v.max= 42 x.defl=25
namespace cars {
    let ap0 = AnalogPin.P0
    let ap1 = AnalogPin.P1
    let ap2 = AnalogPin.P2
    let ap3 = AnalogPin.P3
    let ap4 = AnalogPin.P4
    let ap5 = AnalogPin.P5
    let ap6 = AnalogPin.P6
    let ap7 = AnalogPin.P7
    let ap8 = AnalogPin.P8
    let ap9 = AnalogPin.P9
    let ap10 = AnalogPin.P10
    let ap11 = AnalogPin.P11
    let ap12 = AnalogPin.P12
    let ap13 = AnalogPin.P13
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
    export function LeftWheelForwardWithSpeed(speed: number): void {
        pins.analogWritePin(ap8, speed)
        pins.digitalWritePin(dp2, 0)
    }
    //% block
    export function LeftWheelBackwardWithSpeed(speed: number): void {
        pins.analogWritePin(ap2, speed)
        pins.digitalWritePin(dp8, 0)
    }
    //% block
    export function RightWheelForwardWithSpeed(speed: number): void {
        pins.analogWritePin(ap0, speed)
        pins.digitalWritePin(dp1, 0)
    }
    //% block
    export function RightWheelBackwardWithSpeed(speed: number): void {
        pins.analogWritePin(ap1, speed)
        pins.digitalWritePin(dp0, 0)
    }
    //% block
    export function LeftTurnWithSpeed(speed: number): void {
        pins.analogWritePin(ap2, speed)
        pins.digitalWritePin(dp8, 0)
        pins.analogWritePin(ap0, speed)
        pins.digitalWritePin(dp1, 0)
    }
    //% block
    export function RightTurnWithSpeed(speed: number): void {
        pins.analogWritePin(ap1, speed)
        pins.digitalWritePin(dp0, 0)
        pins.analogWritePin(ap8, speed)
        pins.digitalWritePin(dp2, 0)
    }
    //% block
    export function MoveBackwardWithSpeed(speed: number): void {
        pins.analogWritePin(ap1, speed)
        pins.digitalWritePin(dp0, 0)
        pins.analogWritePin(ap2, speed)
        pins.digitalWritePin(dp8, 0)
    }
    //% block
    export function MoveForwardWithSpeed(speed: number): void {
        pins.analogWritePin(ap8, speed)
        pins.digitalWritePin(dp2, 0)
        pins.analogWritePin(ap0, speed)
        pins.digitalWritePin(dp1, 0)
    }
}
