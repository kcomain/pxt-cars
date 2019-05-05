//% weight=100 color=#5abcab icon="\uf1b9"
//        >>
// Latest 1.0.1 version
// //[%] v.min=0 v.max= 42 x.defl=25
namespace cars {
    /**
     * Stop the car
     */
    //% block

    export function StopAll(): void {
        pins.analogWritePin(AnalogPin.P0, 0)
        pins.analogWritePin(AnalogPin.P1, 0)
        pins.analogWritePin(AnalogPin.P2, 0)
        pins.analogWritePin(AnalogPin.P8, 0)
    }
    /**
     * Turn Right with only left wheel
    */
    //% block
    export function LeftWheelForwardWithSpeed(speed: number): void {
        pins.analogWritePin(AnalogPin.P8, speed)
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
    /**
     * Turn Left with only left wheel
     */
    //% block
    export function LeftWheelBackwardWithSpeed(speed: number): void {
        pins.analogWritePin(AnalogPin.P2, speed)
        pins.digitalWritePin(DigitalPin.P8, 0)
    }
    /**
     * Turn left with only right wheel
     */
    //% block
    export function RightWheelForwardWithSpeed(speed: number): void {
        pins.analogWritePin(AnalogPin.P0, speed)
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
    /**
     * Turn right with only right wheel
     */
    //% block
    export function RightWheelBackwardWithSpeed(speed: number): void {
        pins.analogWritePin(AnalogPin.P1, speed)
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
    /**
     * Turn left with both of the wheels
     */
    //% block
    export function LeftTurnWithSpeed(speed: number): void {
        pins.analogWritePin(AnalogPin.P2, speed)
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.analogWritePin(AnalogPin.P0, speed)
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
    /**
     * Turn right with both of the wheels
     */
    //% block
    export function RightTurnWithSpeed(speed: number): void {
        pins.analogWritePin(AnalogPin.P1, speed)
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.analogWritePin(AnalogPin.P8, speed)
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
    /**
     * Move backward with both of the wheels simultaneously
     */
    //% block
    export function MoveBackwardWithSpeed(speed: number): void {
        pins.analogWritePin(AnalogPin.P1, speed)
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.analogWritePin(AnalogPin.P2, speed)
        pins.digitalWritePin(DigitalPin.P8, 0)
    }
    /**
     * Move forward with both of the wheels simultaneously
     */
    //% block
    export function MoveForwardWithSpeed(speed: number): void {
        pins.analogWritePin(AnalogPin.P8, speed)
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.analogWritePin(AnalogPin.P0, speed)
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
}
