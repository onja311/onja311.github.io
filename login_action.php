<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $emailOrPhone = $_POST["emailOrPhone"];
    $password = $_POST["password"];
    
    // Ataovy eto ny fanamarinana ny email/phone sy ny password ao amin'ny tahiry (database)
    
    if ($emailOrPhone == "example@example.com" && $password == "examplepassword") {
        echo "Fidirana nahomby!";
    } else {
        echo "Hadisoana: Diso ny fampidirana.";
    }
} else {
    http_response_code(405);
    echo "Hadisoana: Fomba fangatahana tsy ara-dalàna.";
}
?>
