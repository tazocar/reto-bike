import React from 'react';
import './report.css';

const ReportBike = () => (
	<div className="ReportBike">
		<div className="row">
			<div className="col-12 col-md-12 col-lg-12">
			<label className="label" htmlFor="">Número de la Bicicleta</label>
				<div className="input-group mb-3">
					<input type="text" className="form-control" placeholder="Campo obligatorio" aria-label="Recipient's username" aria-describedby="basic-addon2" />
					<div className="input-group-append">
						<i className="fas fa-qrcode"></i>
					</div>
				</div>
			</div>
			<div className="col-12 col-md-12 col-lg-12">
				<label className="label" htmlFor="">Estación</label>
				<div className="input-group mb-3">
					<input type="text" className="form-control" placeholder="Campo obligatorio" aria-label="Recipient's username" aria-describedby="basic-addon2" />
					<div className="input-group-append">
						<i className="fas fa-map-marker-alt"></i>
					</div>
				</div>
			</div>
		</div>
		<div className="row">
			<div className="col-12 col-md-12 col-lg-12">
				<p>Seleccione pieza dañada</p>
			</div>
		</div>
		<div className="row icons">
			<div className="col-3 col-md-3 col-lg-3">
				<a href=""><i className="fas fa-circle"></i></a>
				<p>Asiento</p>
			</div>
			<div className="col-3 col-md-3 col-lg-3">
				<a href=""><i className="fas fa-circle"></i></a>
				<p>Candado</p>
			</div>
			<div className="col-3 col-md-3 col-lg-3">
				<a href=""><i className="fas fa-circle"></i></a>
				<p>Cadena</p>
			</div>
			<div className="col-3 col-md-3 col-lg-3">
				<a href=""><i className="fas fa-circle"></i></a>
				<p>Pedales</p>
			</div>
		</div>
		<div className="row icons">
			<div className="col-3 col-md-3 col-lg-3">
				<a href=""><i className="fas fa-circle"></i></a>
				<p>Frenos</p>
			</div>
			<div className="col-3 col-md-3 col-lg-3">
				<a href=""><i className="fas fa-circle"></i></a>
				<p>Ruedas</p>
			</div>
			<div className="col-3 col-md-3 col-lg-3">
				<a href=""><i className="fas fa-circle"></i></a>
				<p>Campana</p>
			</div>
			<div className="col-3 col-md-3 col-lg-3">
				<a href=""><i className="fas fa-circle"></i></a>
				<p>Otros</p>
			</div>
		</div>
		<div className="row">
			<div className="col-12 col-md-12 col-lg-12">
				<textarea className="form-control textarea"  rows="3" placeholder="Agregue comentario"></textarea>
			</div>
		</div>
		<div className="row">
			<div className="col-12 col-md-12 col-lg-12">
				<a href=""><i className="fas fa-camera"></i></a>
			</div>
		</div>
		<div className="row">
			<div className="col-12 col-md-12 col-lg-12">
				<button type="button" className="button">Enviar reporte</button>
			</div>
		</div>
	</div>
)

export default ReportBike;