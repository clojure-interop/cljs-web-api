(ns web.streams.core
  "web.streams interfaces."
  (:require [web.streams.ByteLengthQueuingStrategy]
            [web.streams.ConstrainBoolean]
            [web.streams.ConstrainDOMString]
            [web.streams.ConstrainLong]
            [web.streams.CountQueuingStrategy]
            [web.streams.DoubleRange]
            [web.streams.LongRange]
            [web.streams.MediaStream]
            [web.streams.MediaStream.ev]
            [web.streams.MediaStreamTrackEvent]
            [web.streams.MediaTrackConstraints]
            [web.streams.MediaTrackSupportedConstraints]
            [web.streams.TransformStream]
            [web.streams.WritableStream]
            [web.streams.WritableStreamDefaultWriter]))
