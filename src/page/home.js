import {h, Component} 					from 'preact/preact';
import Bar								from 'bar/bar';

export default class PageHome extends Component {
	render( props ) {
		return (
			<div class="page-home">
				<video autoplay muted loop id="vid" class="fadein">
					<source src="video/ready.mp4" type="video/mp4" />
				</video>

				<div id="content">
					<div>Mike Kasprzak</div>
					<div>Digital Entertainment/Systems Engineer</div>

					<Bar />
				</div>
			</div>
		);
	}
}
