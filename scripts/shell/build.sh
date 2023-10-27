#!/bin/bash

npx google-closure-compiler \
--language_in ECMASCRIPT5_STRICT \
--language_out ECMASCRIPT5_STRICT \
--warning_level DEFAULT \
--compilation_level WHITESPACE_ONLY \
--isolation_mode IIFE \
--js "./../../lib/rune.js" \
--js "./../../src/scope/Manifest.js" \
--js "./../../src/data/resource/Requests.js" \
--js "./../../src/scene/game/Game.js" \
--js "./../../src/scene/gameover/GameOver.js" \
--js "./../../src/scene/box/Box.js" \
--js "./../../src/scene/player/Player.js" \
--js "./../../src/scene/player/Player1.js" \
--js "./../../src/scene/player/Player2.js" \
--js "./../../src/scene/player/Player3.js" \
--js "./../../src/scene/player/Player4.js" \
--js "./../../src/scene/howToPlay/HowToPlay.js" \
--js "./../../src/scene/Menu/Menus.js" \
--js "./../../src/scene/Menu/Menu.js" \
--js "./../../src/system/Main.js" \
--js "./../../src/scope/Alias.js" \
--js_output_file "./../../dist/BoxJumper.js";