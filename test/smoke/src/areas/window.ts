/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { SpectronApplication } from '../spectron/application';

export class Window {

	constructor(private spectron: SpectronApplication) {

	}

	public async getTitle(): Promise<string> {
		return this.spectron.client.getTitle();
	}

}
