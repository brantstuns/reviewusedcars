// This is a template literal so you can conditionally load things like analytics based on environment variables
module.exports = () => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Review Used Cars</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <link href="/styles.css" rel="stylesheet" />
    <link rel="icon" type="image/ico" href="./favicon.ico"/>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <script src="https://use.fontawesome.com/a8fb6db112.js"></script>
  </head>
  <body>
    <div id="appRender"></div>
    <div id="resume-path-tkn" style="display: none" data-tkn="notoken" data-test="cheese-board/public/index.html"></div>
    <script type="text/javascript" src="/bundle.js" charset="utf-8"></script>
    <script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
  </body>
</html>`;
