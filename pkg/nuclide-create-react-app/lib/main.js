'use babel';
/* @flow */

/*
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

import createPackage from '../../commons-atom/createPackage';
import {Disposable, CompositeDisposable} from 'atom';
import {safeSpawn} from '../../commons-node/process';
let disposables: CompositeDisposable;


export function activate(state?: Object = {}): void {
  this.createReactApp('/home/bsankara/Desktop/aa');
}

export function createReactApp(path : string) : void {
  const proc = safeSpawn('create-react-app', [path]);
  proc.on('exit', e => {
    // do exit procedure
  });
}
