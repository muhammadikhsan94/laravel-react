import React, { Component } from 'react'
import { ReactBingmaps } from 'react-bingmaps'
import { Link } from 'react-router-dom'
import SweetAlert from 'react-bootstrap-sweetalert'

class ComplaintCreate extends Component {
	constructor(props) {
		super(props);
		this.state = {
			nama_pelapor: '',
			nik: '',
			alamat: '',
			no_hp: '',
			nama_jalan: '',
			id_kategori: '',
			lat: '',
			lng: '',
			alert: null,
			errors: [],
			bingmapKey: "Aq7awNJp0-DRInhStx0Fn88vq0-jN0oNRUqlHORg7hMrjOsnXKdxrXAsY6O3xSaM"
		}
		this.handleFieldChange = this.handleFieldChange.bind(this)
		this.handleCreateNewComplaint = this.handleCreateNewComplaint.bind(this)
		this.hasErrorFor = this.hasErrorFor.bind(this)
		this.renderErrorFor = this.renderErrorFor.bind(this)
	}

	handleFieldChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	goToHome() {
		const getAlert = () => (
			<SweetAlert
				success
				title="Success!"
				onConfirm={() => this.onSuccess()}
				onCancel={this.hideAlert()}
				timeout={2000}
				confirmBtnText="Oke Siap"
			>
				Created complaint successfully!
			</SweetAlert>
		);
		this.setState({
			alert: getAlert()
		});
	}

	onSuccess() {
		this.props.history.push('/');
	}

	hideAlert() {
		this.setState({
			alert: null
		});
	}

	handleCreateNewComplaint(event) {
		event.preventDefault()
		const lapor = {
			nama_pelapor: this.state.nama_pelapor,
			nik: this.state.nik,
			alamat: this.state.alamat,
			no_hp: this.state.no_hp,
			nama_jalan: this.state.nama_jalan,
			id_kategori: this.state.id_kategori,
			lat: this.state.lat,
			lng: this.state.lng
		}
		axios.post('/api/create/store', lapor).then(response => {
			var msg = response.data.success;
			if (msg == true) {
				return this.goToHome();
			}
		}).catch(err => {
			console.log(err);
		});
	}

	hasErrorFor(field) {
		return !!this.state.errors[field]
	}

	renderErrorFor(field) {
		if (this.hasErrorFor(field)) {
			return (
				<span className='invalid-feedback'>
					<strong>{this.state.errors[field][0]}</strong>
				</span>
			)
		}
	}

	render() {
		return (
			<React.Fragment>
				<div className="page-content">
					<ul className="breadcrumb">
						<li><Link to="/"><span className="glyphicon glyphicon-home"></span></Link></li>
						<li className="active">Buat Pengaduan</li>
					</ul>

					<div className="page-content-wrap">
						<div className="row">
							<div className="col-lg-7">
								<div className="panel panel-default">
									<div className="panel-heading" style={{ backgroundColor: '#1caf9a', color: 'white' }}>Buat Pengaduan</div>
									<div className="panel-body">
										<form className="form-horizontal" onSubmit={ this.handleCreateNewComplaint } method="post" encType="multipart/form-data">
											<div className="form-group">
												<label className="col-md-3">Nama Pelapor*</label>
												<div className="col-md-4">
													<input
														className={`form-control ${this.hasErrorFor('nama_pelapor') ? 'is-invalid' : ''}`}
														placeholder="Nama Lengkap "
														id="nama_pelapor"
														name="nama_pelapor"
														value={this.state.nama_pelapor}
														onChange={this.handleFieldChange}
														autoFocus
													/>
													{this.renderErrorFor('nama_pelapor')}
												</div>
											</div>

											<div className="form-group">
												<label className="col-md-3">Nomor Identitas</label>
												<div className="col-md-4">
													<input
														className={`form-control ${this.hasErrorFor('nik') ? 'is-invalid' : ''}`}
														placeholder="NIK "
														id="nik"
														name="nik"
														value={this.state.nik}
														onChange={this.handleFieldChange}
													/>
													{this.renderErrorFor('nik')}
												</div>
											</div>

											<div className="form-group">
												<label className="col-md-3">Alamat Pelapor</label>
												<div className="col-md-9">
													<input
														className={`form-control ${this.hasErrorFor('alamat') ? 'is-invalid' : ''}`}
														placeholder="Alamat Anda "
														id="alamat"
														name="alamat"
														value={this.state.alamat}
														onChange={this.handleFieldChange}
													/>
													{this.renderErrorFor('alamat')}
												</div>
											</div>

											<div className="form-group">
												<label className="col-md-3">Nomor HP</label>
												<div className="col-md-4">
													<input
														className={`form-control ${this.hasErrorFor('no_hp') ? 'is-invalid' : ''}`}
														placeholder="Nomor HP "
														id="no_hp"
														name="no_hp"
														value={this.state.no_hp}
														onChange={this.handleFieldChange}
													/>
													{this.renderErrorFor('no_hp')}
												</div>
											</div>

											<div className="form-group">
												<label className="col-md-3">Nama Jalan Rusak*</label>
												<div className="col-md-9">
													<input
														className={`form-control ${this.hasErrorFor('nama_jalan') ? 'is-invalid' : ''}`}
														id="nama_jalan"
														name="nama_jalan"
														placeholder="nama jalan "
														value={this.state.nama_jalan}
														onChange={this.handleFieldChange}
													/>
													{this.renderErrorFor('nama_jalan')}
													<i>* Contoh : Jalan Bumi Manti 1 Kampung Baru Bandar Lampung</i>
												</div>
											</div>

											<div className="form-group">
												<label className="col-md-3">Kategori Rusak*</label>
												<div className="col-md-3">
													<select
														id="id_kategori"
														name="id_kategori"
														className={`form-control ${this.hasErrorFor('id_kategori') ? 'is-invalid' : ''}`}
														value={this.state.id_kategori}
														onChange={this.handleFieldChange}
													>
														<option>Pilih Jalan Rusak</option>
														<option value="1">Jalan Rusak Ringan</option>
														<option value="2">Jalan Rusak Sedang</option>
														<option value="3">Jalan Rusak Berat</option>
													</select>
												</div>
												<a href="{}" data-toggle="modal" data-target="#ket"><span className="glyphicon glyphicon-question-sign" style={{ marginTop: '5px', fontSize: '18px' }}></span></a>
											</div>

											<input
												className={`form-control ${this.hasErrorFor('lat') ? 'is-invalid' : ''}`}
												type="hidden"
												id="lat"
												name="lat"
												value={this.state.lat}
												onChange={this.handleFieldChange}
											/>
											<input
												className={`form-control ${this.hasErrorFor('lng') ? 'is-invalid' : ''}`}
												type="hidden"
												id="lng"
												name="lng"
												value={this.state.lng}
												onChange={this.handleFieldChange}
											/>

											{/*<div className="form-group">
												<label className="col-md-3">Foto Jalan*</label>
												<div className="col-md-9">
													<input
														className={`form-control ${this.hasErrorFor('title') ? 'is-invalid' : ''}`}
														id="foto_jalan"
														name="foto_jalan[]"
														type="file"
														multiple accept="{ }" />
												</div>
											</div>*/}

											<div className="col-md-offset-3">
												<Link className='btn btn-secondary' to={`/`}>Back</Link>
												<button className="btn btn-primary">Create</button>
												{this.state.alert}
											</div>
										</form>
									</div>
								</div>
							</div>

							<div className="row">
								<div className="col-lg-5">
									<div className="panel panel-default">
										<div className="panel-heading" style={{ backgroundColor: '#1caf9a', color: 'white' }}>Peta</div>
										<div className="panel-body">
											<div style={{ width: 'auto', height: '300px' }} id="Mymap"></div>
											<ReactBingmaps
												id="Mymap"
												bingmapKey={this.state.bingmapKey}
												//center={[13.0827, 80.2707]}
												zoom={4}
												mapTypeId={"road"}
											>
											</ReactBingmaps>
											<p style={{ marginTop: '5px', textAlign: 'center', color: 'red' }}><b>* Tarik Titik Marker Jika Kordinat Tidak Sesuai *</b></p>
											<div id="output"></div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default ComplaintCreate