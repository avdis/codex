<?php $code = file_get_contents($this->getPathBase() . 'template/code/buttons/_outline.html') ?>

<div class="typography">
	<p>Outline buttons.</p>
</div>
<div class="clearfix example-code"><?php echo $code ?></div>
<syntax-highlight lang="html" theme="github-gist"><?php echo trim($code) ?></syntax-highlight>
