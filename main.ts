basic.forever(function () {
    music.play(music.createSoundExpression(WaveShape.Noise, 1, 4715, 255, 0, 5000, SoundExpressionEffect.Tremolo, InterpolationCurve.Logarithmic), music.PlaybackMode.UntilDone)
})
