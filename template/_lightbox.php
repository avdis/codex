<?php $code = file_get_contents($this->getPathBase() . 'js/lightbox.js') ?>

<div class="typography">
	<p></p>
</div>
<pre><code><?php echo htmlspecialchars(trim($code)) ?></code></pre>
