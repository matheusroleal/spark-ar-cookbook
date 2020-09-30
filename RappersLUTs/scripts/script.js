/**
 * (c) Facebook, Inc. and its affiliates. Confidential and proprietary.
 */

//==============================================================================
// Welcome to scripting in Spark AR Studio! Helpful links:
//
// Scripting Basics - https://fb.me/spark-scripting-basics
// Reactive Programming - https://fb.me/spark-reactive-programming
// Scripting Object Reference - https://fb.me/spark-scripting-reference
// Changelogs - https://fb.me/spark-changelog
//==============================================================================

// How to load in modules
const NativeUI = require('NativeUI');
const Scene = require('Scene');
const Textures = require('Textures');
const Materials = require('Materials');

// Use export keyword to make a symbol available in scripting debug console
export const Diagnostics = require('Diagnostics');

const rFilter = Scene.root.find('lut_rectangle');

const logoKelly = Textures.get('kelly_logo');
const logoDrake = Textures.get('drake_logo');
const logoTyler = Textures.get('tyler_logo');
const logoBrown = Textures.get('brown_logo');
const logoAsap = Textures.get('asap_logo');
const logoTravis = Textures.get('travis_logo');

const picker = NativeUI.picker;

const index = 0;

const configuration = {

    selectedIndex: index,
  
    items: [
      {image_texture: logoDrake},
      {image_texture: logoKelly},
      {image_texture: logoTyler},
      {image_texture: logoTravis},
      {image_texture: logoAsap},
      {image_texture: logoBrown},
    ]
  
};

const materials = ['lut_drake', 'lut_kelly', 'lut_tyler', 'lut_travis', 'lut_asap', 'lut_brown']

picker.configure(configuration);
picker.visible = true;

picker.selectedIndex.monitor().subscribe(function(index) {
    var pos = index.newValue;

    rFilter.material = Materials.get(materials[pos]);
});