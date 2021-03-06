import {h, render, Component}			from 'preact/preact';
import UIImage							from 'ui/image/image';
import UILink							from 'ui/link/link';

import PageHome							from 'page/home';
import PageAbout						from 'page/about';
import PageProject						from 'page/project';


// @ifdef DEBUG
//import {}								from 'preact-devtools/devtools';
// @endif


class Main extends Component {
	constructor( props ) {
		super(props);
		// @ifdef DEBUG
		console.log("Running in DEBUG mode");
		// @endif

		this.state = {
			'url': parseHashBang()
		};

		window.addEventListener('hashchange', this.hashChange.bind(this));
		window.addEventListener('navchange', this.navChange.bind(this));
	}

	componentWillMount() {
		this.hashChange();
	}

	hashChange( e ) {
		if ( window.location.href.indexOf('#!/') === -1 ) {
			// Assume if no variables are set as part of the URL, we should keep the old ones
			var Vars = window.location.search;
			if ( !Vars ) {
				if ( window.location.hash.indexOf('?') !== -1 ) {
					Vars = '?' + (window.location.hash.split('?'))[1];
				}
			}
			history.replaceState(null, null, window.location.pathname + '#!/' + Vars);
			this.setState({'url': parseHashBang()});
		}

		this.setState({'url': parseHashBang()});
		this.onChange(e);
	}

	navChange( e ) {
		if ( e.detail.location.href !== e.detail.old.href ) {
			// Assume if no variables are set as part of the URL, we should keep the old ones
			var Vars = e.detail.location.search;
			if ( !Vars ) {
				if ( e.detail.old.hash.indexOf('?') !== -1 ) {
					Vars = '?' + (e.detail.old.hash.split('?'))[1];
				}
			}
			history.pushState(null, null, e.detail.location.pathname + e.detail.location.hash + Vars);

			this.setState({'url': parseHashBang()});
			this.onChange(e);
		}
	}

	onChange( e ) {
		window.scrollTo(0, 0);
	}

	render( props, state ) {
		document.title = "Mike Kasprzak" + state.url.pathname;

		if ( state.url.pathname == '/' ) {
			return <PageHome />;
		}
		else if ( state.url.pathname == '/about' ) {
			return <PageAbout />;
		}
		else if ( state.url.pathname == '/project' ) {
			return <PageProject />;
		}

		return null;

//		return (
//			<div>
//				<video autoplay muted loop id="vid" class="fadein">
//					<source src="video/ready.mp4" type="video/mp4" />
//				</video>
//
//				<div id="content">
//					<div>Mike Kasprzak</div>
//					<div>Digital Entertainment/Systems Engineer</div>
//
//					<Bar />
//				</div>
//			</div>
//		);
	}
}

render(<Main />, document.body);
