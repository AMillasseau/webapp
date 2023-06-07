<?php
// Retrieve the request data
$name = $_POST['name'];
$email = $_POST['email'];

// Perform any necessary operations or validations

// Prepare the response data
$response = [
    'message' => 'Received the following data:',
    'name' => $name,
    'email' => $email
];

// Set the response headers
header('Content-Type: application/json');

// Send the response as JSON
echo json_encode($response);
?>
