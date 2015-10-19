<?php
set_time_limit(3600);
ini_set('memory_limit', '100M');

$range = 2 * pow(10, 6);    //2000000
$sum = 0;

for( $i = 1; $i <= $range; $i++ )
{
    if( isPrime($i) )
    {
        $sum += $i;
    }
}
echo $sum;

function isPrime($num)
{

    if( $num == 1 )     //1 is never a Prime number
        return false;

    if( $num == 2 )     //2 is only even number which is Prime
        return true;

    if( $num % 2 == 0 ) //Even number other than 2 is always not Prime
    {
        return false;
    }

    //Square root algorithm to determine prime number
    for( $i = 3; $i <= ceil(sqrt($num)); $i = $i + 2 )
    {
        if( $num % $i == 0 )
        {
            return false;
        }
    }

    return true;
}

?>
