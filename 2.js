function num_format($num)
    {
        if (!is_numeric($num)) {
            return false;
        }
        $num = explode('.', $num);
        $j = strlen($num[0]) % 3;
        $sl = substr($num[0], 0, $j);
        $sr = substr($num[0], $j);
        $rvalue = '';
        $i = 0;
        while ($i <= strlen($sr)) {
            $rvalue = $rvalue . ',' . substr($sr, $i, 3);
            $i = $i + 3;
        }
        $rvalue = $sl . $rvalue;
        $rvalue = substr($rvalue, 0, strlen($rvalue) - 1);
        $rvalue = explode(',', $rvalue);
        if ($rvalue[0] == 0) {
            array_shift($rvalue);
        $rv = $rvalue[0];
        for ($i = 1; $i < count($rvalue); $i++) {
            $rv = $rv . ',' . $rvalue[$i];
        }
        if (!empty($num[1])) {
            $rvalue = $rv . '.' . $num[1];
        } else {
            $rvalue = $rv;
        }
        return $rvalue;
    }