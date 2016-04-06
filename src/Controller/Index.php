<?php

namespace Mwyatt\Codex\Controller;


/**
 * @author Martin Wyatt <martin.wyatt@gmail.com> 
 * @version	0.1
 * @license http://www.php.net/license/3_01.txt PHP License 3.01
 */
class Index extends \Mwyatt\Core\Controller
{


	public function home() {
		$structure = array_merge((array) json_decode(file_get_contents($this->view->getPathBase('json/structure/css.json'))), (array) json_decode(file_get_contents($this->view->getPathBase('json/structure/js.json'))));

        // gulp tasks
        exec('gulp --tasks', $lines);
        $lineParts = [];
        foreach ($lines as $line) {
            if (!strpos($line, 'gulp')) {
                $lineParts = explode(' ', $line);
                $gulpTasks[] = end($lineParts);
            }
        }
        $this->view->data->offsetSet('gulpTasks', $gulpTasks);
        
		$this->view->appendAsset('css', 'common.bundle');
		$this->view->data->offsetSet('siteTitle', 'mwyatt/codex');
		$this->view->data->offsetSet('structure', $structure);
		return $this->response($this->view->getTemplate('index'));
	}
}
