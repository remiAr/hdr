import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Base64ToGallery, Base64ToGalleryOptions } from '@ionic-native/base64-to-gallery';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { File } from '@ionic-native/file';

declare let startApp;
declare let CameraPreview;
declare let EXIF: any;

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	public picture = [];
	public pictureArray = [];
	private exposureCompensationArray: any;
	public code;
	private three;
	public pic;
	metaData: any;

	public speedExif;

	private dirUrl: string;
	private dirName: string = "tmp/";


	public params = {
		exposure: 1.0
	};
	public renderer;
	public scene;
	public camera;


	constructor(public navCtrl: NavController, private screenOrientation: ScreenOrientation, private base64ToGallery: Base64ToGallery, private file: File) {
		this.exposureCompensationArray = [-3, -2, -1, 0, 0, +1, +2, +3];

	}

	ionViewDidLoad(event) {
		let xPoint = event.x;
		let yPoint = event.y
		CameraPreview.tapToFocus(xPoint, yPoint, res => {
			alert(res);
		}, err => {
			alert(err);
		});

		/* this.init(); */

	}

	/* intent() {
		this.webIntent.getIntent().then(result => {
			alert(JSON.stringify(result));
		}).catch(err => {
			alert(JSON.stringify(err));
		});

		var sApp = startApp.set({
			intent: 'android.media.action.IMAGE_CAPTURE',
			intentstart: "startActivityForResult",
      type: "application/vnd.android.package-archive",
      package: "io.ionic.starterStartApp",
      compoment: ['io.ionic.starterStartApp', 'io.ionic.starterStartApp.MAIN'], 

		});

		sApp.start(success => {
			alert(JSON.stringify(success));
		}, error => {
			alert(JSON.stringify(error));
		}, (result, requestCdode, responseCode) => {
			let picture = createImageBitmap(result.data);
			alert(JSON.stringify(picture));
		});
	}*/

	preview() {

		this.pictureArray = [];
		this.picture = [];

		const options = {
			x: 10,
			y: 10,
			width: window.screen.width - 20,
			height: 100,
			camera: CameraPreview.CAMERA_DIRECTION.BACK,
			toBack: false,
			tapPhoto: false,
			tapFocus: false,
			previewDrag: false,
		};

		CameraPreview.startCamera(options);

		setTimeout(() => {
			alert('start');
			let op = -20;
			var timer = setInterval(() => {
				if (op >= 20) {
					clearInterval(timer);
					alert('finish');
				}
				CameraPreview.setExposureCompensation(op);
				op += 2;
			}, 500);

		}, 500);

		/* setTimeout(() => {

			CameraPreview.setCameraISO(100, (success) => {
				CameraPreview.getCameraISO((iso) => {
					this.code = iso.split(";");
				}, (error) => {
					alert(error);
				});
			}, (error) => {
				alert(error);
			});
			
		}, 500);  */

		/* setTimeout(() => {
			CameraPreview.getSupportedPictureSizes(dimensions => {

				let arraySpeedShutter = [32, 256, 2048, 6192, 10384];

				let base64option: Base64ToGalleryOptions = {
					prefix: 'enVisite_',
					mediaScanner: true
				};

				let i = 0;

				let launchHdr = (i, table) => {
					if (i < table) { */
		/* CameraPreview.setShutterSpeed(arraySpeedShutter[i], (success) => { */
		/* 	CameraPreview.takePicture({ width: dimensions[0].width, height: dimensions[0].height, quality: 0 }, base64PictureData => {
				alert('ok');
				alert(base64PictureData);
				let todecode = atob(base64PictureData);
				alert(todecode);

				this.base64ToGallery.base64ToGallery(btoa(todecode), base64option).then(
					res => {
						i++;

						launchHdr(i, table);
					},
					err => alert('Error saving image to gallery ' + JSON.stringify(err))
				);
			}, error => {
				alert(JSON.stringify(error));
			}); */
		/* }, (error) => {
			alert(JSON.stringify(error));
		}); */

		/* }
		else {
			CameraPreview.stopCamera();
			this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
		}
	};
	launchHdr(i, 1);

});
}, 1000); */
		//CameraPreview.setExposureMode(CameraPreview.EXPOSURE_MODE.LOCK);


		/* CameraPreview.setCameraISO(200, (success) => {
			CameraPreview.setShutterSpeed(800, (success) => {
				alert(JSON.stringify(success));
			});
		}, (error) => {
			alert(JSON.stringify(error))
		}); */

		/* setTimeout(() => {
			CameraPreview.setExposureMode(CameraPreview.EXPOSURE_MODE.CUSTOM);
			CameraPreview.setApertureNumerator(8, success => {
				alert(JSON.stringify(success));
				CameraPreview.getCameraISO((iso) => {
					this.code = iso.split(";");
				}, (error) => {
					alert(error);
				});
			}, error => {
				alert(JSON.stringify(error));
			})

		}, 500); */



		/* CameraPreview.getExposureMode((exposureMode)=>{
		  alert("exposures"+JSON.stringify(exposureMode));
		});

		CameraPreview.getExposureCompensationRange(function(expoxureRange){
			alert("compensation range" + JSON.stringify(expoxureRange));
		}); */
		//CameraPreview.setExposureCompensation(20);
		/* CameraPreview.getExposureCompensation(function(expoxureCompensation){
		  alert("compensation" + JSON.stringify(expoxureCompensation));
		}); */

		/* setTimeout(()=>{
			CameraPreview.setExposureCompensation(this.exposureCompensationArray[6]);
		}, 3000); */

		/*setTimeout(() => {
			for(let i = 0; i < 8; i++){
				CameraPreview.setExposureCompensation(this.exposureCompensationArray[i]);
			}
			 CameraPreview.takePicture(base64PictureData => {
				alert("take");
				this.pictureArray.push('data:image/jpeg;base64,' + base64PictureData);
				//CameraPreview.hide();
				CameraPreview.stopCamera();
			}); 
		}, 2000);*/



		//let i = 0;


		/* var upload = (i, table) => {
			if (i <= table) {
				CameraPreview.takePicture(base64PictureData => {
					this.base64ToGallery.base64ToGallery(base64PictureData, base64option).then(
						res => alert('Saved image to gallery '+ JSON.stringify(res)),
						err => alert('Error saving image to gallery ' + JSON.stringify(err))
					  );
					//this.pictureArray.push('data:image/jpeg;base64,' + base64PictureData);
				});
				i++;
				upload(i, table);
			}
			else {
				
					this.pictureArray.forEach(element => {
						this.picture.push(element);
					});
					CameraPreview.stopCamera();
					

			}
		};
		upload(i, 8); */
	}

	takePic() {

		this.file.createDir(this.file.externalApplicationStorageDirectory, this.dirName, true).then(result => {
			this.dirUrl = result.nativeURL;
			this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);

			setTimeout(() => {

				this._createCamera();

				setTimeout(() => {
					CameraPreview.getSupportedPictureSizes(dimensions => {

						let base64option: Base64ToGalleryOptions = {
							prefix: 'enVisite_',
							mediaScanner: false
						};

						let i = 0;
						let launchHdr = (i, table) => {
							if (i < table) {

								CameraPreview.takePicture({ width: dimensions[0].width, height: dimensions[0].height, quality: 85 }, base64PictureData => {
									let todecode = atob(base64PictureData);

									this.base64ToGallery.base64ToGallery(btoa(todecode), base64option).then(
										res => {

											let path = 'file://' + res.replace(res.substr(res.lastIndexOf('/') + 1), '');

											this.file.moveFile(path, res.substr(res.lastIndexOf('/') + 1), this.dirUrl, '').then(success => {
												alert(i);
												i++;
												launchHdr(i, table);
											}).catch(error => {
												alert(JSON.stringify(error));
											});
										},
										err => alert('Error saving image to gallery ' + JSON.stringify(err))
									).catch(error => {
										alert(JSON.stringify(error));
									});
								}, error => {
									alert(JSON.stringify(error));
								});
							}
							else {
								CameraPreview.stopCamera();
								this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
							}
						};
						launchHdr(i, 8);

					});
					/* 
					CameraPreview.stopCamera();
					alert(window.screen.width); */
				}, 1000);
			}, 700);
		}).catch(err => {
			alert('err' + JSON.stringify(err));
		});

	}

	_createCamera() {
		const options = {
			x: 0,
			y: 0,
			width: window.screen.width / 2,
			height: window.screen.height / 2,
			camera: CameraPreview.CAMERA_DIRECTION.BACK,
			toBack: false,
			tapPhoto: false,
			tapFocus: false,
			previewDrag: false,
		};
		CameraPreview.startCamera(options);
	}

	getPicture() {
		this.file.listDir(this.file.externalApplicationStorageDirectory, this.dirName).then(result => {
			result.forEach(picture => {
				this.picture.push(picture.nativeURL);

			});

		}).catch(err => {
			alert(JSON.stringify(err));
		});
	}

	timeToClose() {
		const options = {
			x: 10,
			y: 10,
			width: window.screen.width - 20,
			height: 100,
			camera: CameraPreview.CAMERA_DIRECTION.BACK,
			toBack: false,
			tapPhoto: false,
			tapFocus: false,
			previewDrag: false,
		};

		CameraPreview.startCamera(options);

		setTimeout(() => {

			/* CameraPreview.setCameraISO(100, (success) => {

			}, (error) => {
				alert(error);
			}); */

			CameraPreview.getSupportedPictureSizes(dimensions => {

				let base64option: Base64ToGalleryOptions = {
					prefix: 'enVisite_',
					mediaScanner: true
				};
				CameraPreview.takePicture({ width: dimensions[0].width, height: dimensions[0].height, quality: 0 }, base64PictureData => {
					let todecode = atob(base64PictureData);

					this.base64ToGallery.base64ToGallery(btoa(todecode), base64option).then(
						res => {
							CameraPreview.getCameraISO((iso) => {
								this.code = iso.split(";");
								CameraPreview.getExposureModes(function (exposureModes) {
									alert(JSON.stringify(exposureModes));
									CameraPreview.stopCamera();
								});

							}, (error) => {
								alert(error);
							});
						},
						err => alert('Error saving image to gallery ' + JSON.stringify(err))
					);

				}, error => {
					alert(JSON.stringify(error));
				});

			});

		}, 500);

	}

	list() {
		this.pictureArray = [];
		this.picture = [];

		const options = {
			x: 10,
			y: 10,
			width: window.screen.width - 20,
			height: window.screen.height,
			camera: CameraPreview.CAMERA_DIRECTION.BACK,
			toBack: false,
			tapPhoto: false,
			tapFocus: false,
			previewDrag: false,
		};

		CameraPreview.startCamera(options);

		setTimeout(() => {
			CameraPreview.getCameraISO((iso) => {
				alert(iso);

				CameraPreview.stopCamera();
			}, (error) => {
				alert(error);
			});
		}, 3000);

	}



	exifExposureTime() {

		this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);

		setTimeout(() => {

			const options = {
				x: 0,
				y: 0,
				width: window.screen.width,
				height: window.screen.height,
				camera: CameraPreview.CAMERA_DIRECTION.BACK,
				toBack: false,
				tapPhoto: false,
				tapFocus: false,
				previewDrag: false,
			};

			CameraPreview.startCamera(options);




			setTimeout(() => {

				CameraPreview.setCameraISO(100, (success) => {

					CameraPreview.setMetering("spot", success => {
						setTimeout(() => {
							CameraPreview.getSupportedPictureSizes(dimensions => {

								let base64option: Base64ToGalleryOptions = {
									prefix: 'enVisite_',
									mediaScanner: true
								};

								/* CameraPreview.setShutterSpeed(8000, success => { */
								CameraPreview.takePicture({ width: dimensions[0].width, height: dimensions[0].height, quality: 100 }, base64PictureData => {
									let todecode = atob(base64PictureData);

									this.base64ToGallery.base64ToGallery(btoa(todecode), base64option).then(
										res => {

											CameraPreview.getExifExposureTime(success => {
												let exif = (success.indexOf('.') > -1 ? success.split('.')[0] : success);
												alert(exif);
												this.loopPicture(exif, dimensions);
											}, error => {
												alert(error);

												CameraPreview.stopCamera();
												this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
											});
										},
										err => alert('Error saving image to gallery ' + JSON.stringify(err))
									);

								}, error => {
									alert(JSON.stringify(error));
								});

								/* }, error => {
									alert(JSON.stringify(error));
								}); */

							});
						}, 500);


					});


				}, (error) => {
					alert(error);
				});

			}, 500);
		}, 500);

	}

	loopPicture(speed, dimensions) {
		let speedFormat;
		let arrayMultiplicator = [];
		if (speed.length == 1) {
			speedFormat = speed * 1000;
		}
		else if (speed.length == 2) {
			speedFormat = speed / 10;
			speedFormat = speedFormat.toFixed(3);
			arrayMultiplicator[0] = speedFormat / 6;
			arrayMultiplicator[1] = speedFormat / 4;
			arrayMultiplicator[2] = speedFormat / 2;
			arrayMultiplicator[3] = speedFormat * 2;
			arrayMultiplicator[4] = speedFormat * 4;
			arrayMultiplicator[5] = speedFormat * 6;
			/* if (speed < 50) {

				lessmultiplicator = 1.6;
				moremultiplicator = 2.6;

			}
			else {
				lessmultiplicator = 2.6;
				moremultiplicator = 2.6;
			} */
		}
		else if (speed.length == 3) {
			speedFormat = speed / 100;
			speedFormat = speedFormat.toFixed(3);
			if (speed > 500) {
				arrayMultiplicator[0] = speedFormat / 15;
				arrayMultiplicator[1] = speedFormat / 10;
				arrayMultiplicator[2] = speedFormat / 5;
				arrayMultiplicator[3] = speedFormat * 0.9;
				arrayMultiplicator[4] = speedFormat * 1.8;
				arrayMultiplicator[5] = speedFormat * 3.6;
			}
			else {
				arrayMultiplicator[0] = speedFormat / 6;
				arrayMultiplicator[1] = speedFormat / 4;
				arrayMultiplicator[2] = speedFormat / 2;
				arrayMultiplicator[3] = speedFormat * 1.4;
				arrayMultiplicator[4] = speedFormat * 2.8;
				arrayMultiplicator[5] = speedFormat * 4.2;
			}
			/* if (speed < 500) {
				lessmultiplicator = 1.20;
				moremultiplicator = 3.60;
			}
			else {
				lessmultiplicator = 2.60;
				moremultiplicator = 3.60;
			} */

		} else {
			let calcul = (speed as string).slice(0, 1) + "." + (speed as string).slice(1);
			speedFormat = calcul as any;
			arrayMultiplicator[0] = speedFormat / 7.5;
			arrayMultiplicator[1] = speedFormat / 5;
			arrayMultiplicator[2] = speedFormat / 2.5;
			arrayMultiplicator[3] = speedFormat * 2;
			arrayMultiplicator[4] = speedFormat * 4;
			arrayMultiplicator[5] = speedFormat * 6;
		}
		/* if (speed > 2500) {
			multiplicator = 0.7;
		}
		else if (speed < 1500) {
			multiplicator = 2.5;
		}
		else {
			multiplicator = 2;
		} */
		alert('ok');
		let zeroValue = (arrayMultiplicator[0] < 0.032 ? 0.032 : arrayMultiplicator[0]);
		let secondeValueArray = (arrayMultiplicator[2] < 0.032 ? 0.032 : arrayMultiplicator[2]);
		let firstValueArray = (arrayMultiplicator[1] < 0.032 ? 0.032 : arrayMultiplicator[1]);
		let thirdValueArray = arrayMultiplicator[3];
		let quarterValueArray = arrayMultiplicator[4];
		let fiveValueArray = arrayMultiplicator[5];
		alert(arrayMultiplicator);
		let arraySpeed = [zeroValue.toFixed(3), firstValueArray.toFixed(3), secondeValueArray.toFixed(3), thirdValueArray.toFixed(3), quarterValueArray.toFixed(3), fiveValueArray.toFixed(3)];
		alert(arraySpeed);

		let base64option: Base64ToGalleryOptions = {
			prefix: 'enVisite_',
			mediaScanner: true
		};

		let i = 0;

		let launchHdr = (i, table) => {
			alert(i);
			if (i < table) {
				CameraPreview.setCameraISO(100, (success) => {
					alert(success);
					setTimeout(() => {


						let str = (arraySpeed[i] as string).replace('.', '');
						for (var j = 0; j < str.length; j++) {
							if (str.charAt(0) == "0") {
								str = str.replace('0', "");
							}
						}

						setTimeout(() => {
							CameraPreview.setShutterSpeed(str, (success) => {
								CameraPreview.takePicture({ width: dimensions[0].width, height: dimensions[0].height, quality: 100 }, base64PictureData => {
									let todecode = atob(base64PictureData);

									this.base64ToGallery.base64ToGallery(btoa(todecode), base64option).then(
										res => {
											i++;
											launchHdr(i, table);
										},
										err => alert('Error saving image to gallery ' + JSON.stringify(err))
									);
								}, error => {
									alert(JSON.stringify(error));
								});
							}, error => {
								alert(JSON.stringify(error));
							});
						}, 500);
					}, 500);
				}, error => {
					alert(error);
				});
			}
			else {
				alert('finish');
				CameraPreview.stopCamera();
				this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);

			}
		};
		launchHdr(i, 6);

	}
	focusMode() {
		const options = {
			x: 0,
			y: 200,
			width: window.screen.width,
			height: window.screen.height,
			camera: CameraPreview.CAMERA_DIRECTION.BACK,
			toBack: false,
			tapPhoto: false,
			tapFocus: true,
			previewDrag: false,
		};
		this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);


		setTimeout(() => {
			CameraPreview.startCamera(options);

			setTimeout(() => {
				CameraPreview.setFocusMode(CameraPreview.FOCUS_MODE.AUTO, success => {
					alert(success);
				});

				CameraPreview.setCameraISO(100, () => {
					CameraPreview.getSupportedPictureSizes(dimensions => {

						let base64option: Base64ToGalleryOptions = {
							prefix: 'enVisite_',
							mediaScanner: true
						};

						CameraPreview.takePicture({ width: dimensions[0].width, height: dimensions[0].height, quality: 100 }, base64PictureData => {
							let todecode = atob(base64PictureData);

							this.base64ToGallery.base64ToGallery(btoa(todecode), base64option).then(
								res => {

									CameraPreview.getExifExposureTime(success => {
										let exif = (success.indexOf('.') > -1 ? success.split('.')[0] : success);
										alert(exif);
										this.loopPicture(exif, dimensions);
									}, error => {
										alert(error);

										CameraPreview.stopCamera();
										this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
									});
								},
								err => alert('Error saving image to gallery ' + JSON.stringify(err))
							);

						}, error => {
							alert(JSON.stringify(error));
						});
					});
				});
			}, 500);

		}, 200);


	}

	test() {

		this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);

		setTimeout(() => {
			const options = {
				x: 0,
				y: 0,
				width: window.screen.width - 100,
				height: window.screen.height,
				camera: CameraPreview.CAMERA_DIRECTION.BACK,
				toBack: false,
				tapPhoto: false,
				tapFocus: true,
				previewDrag: false,
			};
			CameraPreview.startCamera(options);

		}, 500);


	}

	take() {

		CameraPreview.getExposureCompensationRange(function (exposureRange) {
			if (exposureRange.min + exposureRange.max == 0) {
				if (exposureRange.max % 2 == 0) {
					let result = 0;
					let i = 0;
					for (i; exposureRange.max != result; i++) {
						result += 2;
					}
					alert(result);
					alert(i);
				}
				else if (exposureRange.max % 3 == 0) {
					let result = 0;
					let i = 0;
					for (i; exposureRange.max != result; i++) {
						result += 3;
					}
					alert(result);
					alert(i);
					alert('plus grad');
				}
			}
			alert("min: " + exposureRange.min);
			alert("max: " + exposureRange.max);
		});

		CameraPreview.getParamsCamera(result => {
			alert(JSON.stringify(result));
		})

		/* const arrayCompensation = [-20, -15, -10, -5, 0, 5, 10, 15, 20];
		CameraPreview.getCameraISO((iso) => {
			CameraPreview.setCameraISO(100, () => {
				CameraPreview.getSupportedPictureSizes(dimensions => {

					let base64option: Base64ToGalleryOptions = {
						prefix: 'enVisite_',
						mediaScanner: true
					};

					let i = 0;

					let launchHdr = (i, table) => {
						if (i < table) {
							CameraPreview.setExposureCompensation(arrayCompensation[i], success => {
								setTimeout(() => {
									CameraPreview.takePicture({ width: dimensions[0].width, height: dimensions[0].height, quality: 0 }, base64PictureData => {
										let todecode = atob(base64PictureData);

										this.base64ToGallery.base64ToGallery(btoa(todecode), base64option).then(
											res => {
												i++;

												launchHdr(i, table);
											},
											err => alert('Error saving image to gallery ' + JSON.stringify(err))
										);
									}, error => {
										alert(JSON.stringify(error));
									});
								}, 500);

							});
						}
						else {
							CameraPreview.stopCamera();
							this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
						}
					};
					launchHdr(i, 9);
				});
			});
		}, (error) => {
			alert(error);
			CameraPreview.stopCamera();
		}); */

	}

	launchCamera(isBack) {
		const options = {
			x: 0,
			y: 0,
			width: window.screen.width - 250,
			height: window.screen.height,
			camera: CameraPreview.CAMERA_DIRECTION.BACK,
			toBack: isBack,
			tapPhoto: false,
			tapFocus: true,
			previewDrag: false,
		};
		CameraPreview.startCamera(options);
	}

	testLG() {
		this.launchCamera(true);
		setTimeout(() => {
			CameraPreview.getSupportedPictureSizes(dimensions => {

				let base64option: Base64ToGalleryOptions = {
					prefix: 'enVisite_',
					mediaScanner: true
				};
				CameraPreview.takePicture({ width: dimensions[0].width, height: dimensions[0].height, quality: 0 }, base64PictureData => {
					let todecode = atob(base64PictureData);

					this.base64ToGallery.base64ToGallery(btoa(todecode), base64option).then(
						res => {
							CameraPreview.getCameraISO((iso) => {
								alert(iso);
								CameraPreview.stopCamera();
							}, (error) => {
								alert(error);
								CameraPreview.stopCamera();
							});
						},
						err => alert('Error saving image to gallery ' + JSON.stringify(err))
					);
				}, error => {
					alert(JSON.stringify(error));
				});

			});
		}, 500);
	}

	prendrephoto() {

		this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);

		setTimeout(() => {
			this.launchCamera(false);

		}, 500);
	}
	prendre() {
		CameraPreview.getCameraISO(sucess => {
			CameraPreview.setCameraISO(100, result => {
				alert(result);
			}, error => {
				alert(error);
			});
		});
		CameraPreview.getSupportedPictureSizes(dimensions => {

			let base64option: Base64ToGalleryOptions = {
				prefix: 'enVisite_',
				mediaScanner: true
			};
			CameraPreview.takePicture({ width: dimensions[0].width, height: dimensions[0].height, quality: 0 }, base64PictureData => {
				let todecode = atob(base64PictureData);



				this.base64ToGallery.base64ToGallery(btoa(todecode), base64option).then(
					res => {
						/* this.pic = 'file://'+res;
						alert("ok");
						CameraPreview.stopCamera(); */

						/* alert(JSON.stringify(exif));

						exif.read('file://'+res, true).then(result=>{
							alert(JSON.stringify(result));
						}).catch(error=>{
							alert(JSON.stringify(error));
						}); */
						/* let picture = new Image();
						picture.src = 'file://'+res;
						picture.onload = ()=>{
							EXIF.getData(picture, ()=>{
								var allmetadata = EXIF.getAllTags(picture);
								alert(JSON.stringify(allmetadata));
							});
						}; */

						CameraPreview.getParamsCamera(result => {
							alert(JSON.stringify(result));
							CameraPreview.getExifExposureTime(res => {
								alert(res);
							}, err => {
								this.prendrePhotoSansExif(dimensions);
							});
							//CameraPreview.stopCamera();
						});

					},
					err => alert('Error saving image to gallery ' + JSON.stringify(err))
				);
			}, error => {
				alert(JSON.stringify(error));
			});

		});
	}

	prendrePhotoSansExif(dimensions) {
		let arrayCompensation = [/* -20, -15, -10, -5, 0, 5, 10, 15, 20 */];
		let base64option: Base64ToGalleryOptions = {
			prefix: 'enVisite_',
			mediaScanner: true
		};

		CameraPreview.getExposureCompensationRange((exposureRange) => {

			switch (exposureRange.max) {
				case 8:
					arrayCompensation = this.createArrayCompensation(exposureRange, 2);
					break;
				case 9:
					arrayCompensation = this.createArrayCompensation(exposureRange, 3);
					break;
				case 10:
					arrayCompensation = this.createArrayCompensation(exposureRange, 2.5);
					break;
				case 12:
					for (let j = exposureRange.min; j <= exposureRange.max; j = j + 3) {
						if (j > 0) {
							arrayCompensation.push(j);
						}
					}
					alert(arrayCompensation);
					break;
				case 14:
					arrayCompensation = this.createArrayCompensation(exposureRange, 3.5);
					break;
				case 16:
					arrayCompensation = this.createArrayCompensation(exposureRange, 4);
					break;
				case 18:
					arrayCompensation = this.createArrayCompensation(exposureRange, 4.5);
					break;
				case 19:
					arrayCompensation = this.createArrayCompensation(exposureRange, 3.8);
					break;
				case 20:
					arrayCompensation = this.createArrayCompensation(exposureRange, 5);
					break;
				default:
					alert('your cellphone don\'t make hdr');
			}

			let i = 0;

			let launchHdr = (i, table) => {
				if (i < table) {
					CameraPreview.setExposureCompensation(arrayCompensation[i], success => {
						setTimeout(() => {
							CameraPreview.takePicture({ width: dimensions[0].width, height: dimensions[0].height, quality: 0 }, base64PictureData => {
								let todecode = atob(base64PictureData);

								this.base64ToGallery.base64ToGallery(btoa(todecode), base64option).then(
									res => {
										i++;

										launchHdr(i, table);
									},
									err => alert('Error saving image to gallery ' + JSON.stringify(err))
								);
							}, error => {
								alert(JSON.stringify(error));
							});
						}, 500);

					});
				}
				else {
					CameraPreview.stopCamera();
				}
			};
			launchHdr(i, arrayCompensation.length);
		});


	}

	prendrePhotoAvecExif() {

	}

	createArrayCompensation(exposureRange, number) {
		let tmpArray = [];

		return tmpArray;
	}


	implement() {
		CameraPreview.test("file:///storage/emulated/0/Pictures/envisite_20188595035", result => {
			alert(JSON.stringify(result));
		});
	}

}

