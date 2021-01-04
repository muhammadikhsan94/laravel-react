import React, { Component } from "react";
import { ReactBingmaps } from 'react-bingmaps';
import { Link } from 'react-router-dom';

class ComplaintIndex extends Component {
	constructor(props) {
		super(props);
		this.state = {
			bingmapKey: "Aq7awNJp0-DRInhStx0Fn88vq0-jN0oNRUqlHORg7hMrjOsnXKdxrXAsY6O3xSaM"
		}
	}

	render() {
		return (
			<React.Fragment>
				<div className="page-content">
					<ul className="breadcrumb">
						<li><Link to="/"><span className="glyphicon glyphicon-home"></span></Link></li>
						<li className="active">Beranda</li>
					</ul>

					<div className="page-content-wrap">
						<div className="row">
							<div className="col-md-12">
								<div style={{ maxWidth: 'auto', height: '850px', marginBottom: '10px' }} id="maps">
									<ReactBingmaps
										id="maps"
										bingmapKey={this.state.bingmapKey}
										center={[13.0827, 80.2707]}
										zoom={4}
									>
									</ReactBingmaps>
								</div>
							</div>
						</div>

						<div className="row">
							<div className="col-md-12 text-center">
								<img src={window.location.origin + '/icon/ringan.png'} alt="logo" style={{ width: '25px', height: '25px' }} />
								<span style={{ marginLeft: '5px', marginRight: '20px' }}><b>JALAN RUSAK RINGAN</b></span>
								<img style={{ width: '25px', height: '25px' }} src={window.location.origin + '/icon/sedang.png'} alt="logo" />
								<span style={{ marginLeft: '5px', marginRight: '20px' }}><b>JALAN RUSAK SEDANG</b></span>
								<img style={{ width: '25px', height: '25px' }} src={window.location.origin + '/icon/berat.png'} alt="logo" />
								<span style={{ marginLeft: '5px', marginRight: '20px' }}><b>JALAN RUSAK BERAT</b></span>
								<img style={{ width: '25px', height: '25px' }} src={window.location.origin + '/icon/perbaikan.png'} alt="logo" />
								<span style={{ marginLeft: '5px', marginRight: '20px' }}><b>JALAN DALAM PERBAIKAN</b></span>
								<img style={{ width: '25px', height: '25px' }} src={window.location.origin + '/icon/selesai.png'} alt="logo" />
								<span style={{ marginLeft: '5px' }}><b>JALAN SELESAI DIPERBAIKI</b></span>
							</div>
						</div>

					</div>
				</div>
			</React.Fragment>
		)
	}
}

export default ComplaintIndex;