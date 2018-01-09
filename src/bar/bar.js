import {h, Component} 					from 'preact/preact';
import UIIcon							from 'ui/icon/icon';
import UIButton							from 'ui/button/button';

export default class Bar extends Component {
	render( props ) {
		let Hash = window.location.hash;
		let Mail = atob('bWlrZUBzeWtocm9uaWNzLmNvbQ==');

		return (
			<div class="bar">
				<UIButton class={cN((Hash == '#!/') ? 'active' : '')} href="#!/"><UIIcon src="home" /></UIButton>
				<UIButton class={cN((Hash.indexOf('#!/project') == 0) ? 'active' : '')} href="#!/project"><UIIcon src="todo" /><span>Projects</span></UIButton>
				<UIButton href="//mikekasprzak.com/Resume-MikeKasprzak.pdf"><UIIcon src="pdf" /><span>Resume</span></UIButton>
				<UIButton href={"mailto:"+Mail+"?subject=mikekasprzak.com"} target="_blank"><UIIcon src="mail" /><span>Contact</span></UIButton>
			</div>
		);
	}
}
