# Mui-JackinBox

A Material-UI component that wraps animate.css

## Installation

    npm install mui-jackinbox --save

or

    yarn add mui-jackinbox

## Demo

See the demo to get moving today:

[link here](https://mui-jackinbox-demo.vercel.app)

## Reference

### Component Props

|Prop|type|Options|Default|Description|
|---|---|---|---|---|
|name|string|[_see below_](#animationNames)|empty|Animation Name|
|animate|boolean|truthy \| falsy|true|Begin animate|
|hideUntilAnimate|boolean|truthy \| falsy|false|Should hide element until `animate` evaluates true|
|noDisplayUntilAnimate|boolean|truthy \| falsy|false|Element will not display until `animate` evaluates true|
|hideAfterAnimate|boolean|truthy \| falsy|false|Should hide element after animation ends|
|noDisplayAfterAnimate|boolean|truthy \| falsy|false|Element will not display after animation ends|
|speed|string|slower \| slow \| fast \| faster|undefined|Animation speed. A null value will result in "normal" speed, or 1s. Default speeds are 3s when `slower`, 2s when `slow`, 800ms when `fast`, and 500ms when `faster`.
|delay|boolean \| number|truthy \| falsy \| 1 \| 2 \| 3 \| 4 \| 5|false|Delay the animation start. A number used here represents a delay in seconds. A truthy value will result in a 1 second delay. A falsy value equates to no delay.|
|repeat|boolean \| number|truthy \| falsy \| 1 \| 2 \| 3 |false|Repeat the animation. A number used here represents the number of repetitions. A truthy value will result in a single repetition. A falsy value equates to no repetition.|
|infinite|boolean|truthy \| falsy|false|Repeat animation indefinitely.|
|speedBy|string|1s, ...|1s|Factor `speed` by an interval. Ex. `<JackinBox name="fadeIn" speed="slow" speedBy="2s" />` would yield a 4 second animation.
|delayBy|string|1s, ...|1s|Factor `delay` by an interval. Ex. `<JackinBox name="fadeIn" delay={2} delayBy="2s" />` would yield a 4 second delay prior to animation.
|repeatBy|string|1s, ...|1s|Factor `repeat` by an interval. Ex. `<JackinBox name="fadeIn" repeat={2} repeatBy={2} />` would yield a animation that is repeated 4 additional times.
|onAnimationStart|function|...|undefined|A function to run once animation begins.|
|onAnimationEnd|function|...|undefined|A function to run once animation ends.|
|prefix|string|css prefix|animate__|Change css prefix. _Untested._|



<span id="animationNames" />

### Animation Names

bounce | flash | pulse | rubberBand | shakeX | shakeY | headShake | swing | tada | wobble | jello | heartBeat | backInDown | backInLeft | backInRight | backInUp | backOutDown | backOutLeft | backOutRight | backOutUp | bounceIn | bounceInDown | bounceInLeft | bounceInRight | bounceInUp | bounceOut | bounceOutDown | bounceOutLeft | bounceOutRight | bounceOutUp | fadeIn | fadeInDown | fadeInDownBig | fadeInLeft | fadeInLeftBig | fadeInRight | fadeInRightBig | fadeInUp | fadeInUpBig | fadeInTopLeft | fadeInTopRight | fadeInBottomLeft | fadeInBottomRight | fadeOut | fadeOutDown | fadeOutDownBig | fadeOutLeft | fadeOutLeftBig | fadeOutRight | fadeOutRightBig | fadeOutUp | fadeOutUpBig | fadeOutTopLeft | fadeOutTopRight | fadeOutBottomRight | fadeOutBottomLeft | flip | flipInX | flipInY | flipOutX | flipOutY | lightSpeedInRight | lightSpeedInLeft | lightSpeedOutRight | lightSpeedOutLeft | rotateIn | rotateInDownLeft | rotateInDownRight | rotateInUpLeft | rotateInUpRight | rotateOut | rotateOutDownLeft | rotateOutDownRight | rotateOutUpLeft | rotateOutUpRight | hinge | jackInTheBox | rollIn | rollOut | zoomIn | zoomInDown | zoomInLeft | zoomInRight | zoomInUp | zoomOut | zoomOutDown | zoomOutLeft | zoomOutRight | zoomOutUp | slideInDown | slideInLeft | slideInRight | slideInUp | slideOutDown | slideOutLeft | slideOutRight | slideOutUp
