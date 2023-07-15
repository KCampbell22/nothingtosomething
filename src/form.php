<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Get form data
    $firstName = $_POST["firstName"];
    $lastName = $_POST["lastName"];
    $phoneNumber = $_POST["phoneNumber"];
    $dateOfInquiry = $_POST["dateOfInquiry"];
    $email = $_POST["email"];
    $comment = $_POST["comment"];

    // Set recipient email address
    $to = "your-email@example.com";

    // Set email subject
    $subject = "Contact Form Submission";

    // Build email message
    $message = "First Name: " . $firstName . "\n";
    $message .= "Last Name: " . $lastName . "\n";
    $message .= "Phone Number: " . $phoneNumber . "\n";
    $message .= "Date of Inquiry: " . $dateOfInquiry . "\n";
    $message .= "Email Address: " . $email . "\n";
    $message .= "Additional Comment:\n" . $comment;

    // Set additional headers
    $headers = "From: " . $email . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";

    // Send email
    if (mail($to, $subject, $message, $headers)) {
        // Email sent successfully
        echo "Thank you for your submission!";
    } else {
        // Email sending failed
        echo "Oops! Something went wrong.";
    }
}
?>