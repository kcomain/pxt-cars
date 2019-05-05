//% weight=100 color=#5abcab icon="\uf1b9"
//        >>
// Latest 1.0.1 version
// //[%] v.min=0 v.max= 42 x.defl=25
namespace cars {
    /**
     * TODO: describe your function here
     * @param StopAll "Stop Cars"
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
