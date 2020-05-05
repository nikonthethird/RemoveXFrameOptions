const handleReceivedHeaders = details => ({
    responseHeaders: details.responseHeaders.filter(header =>
        header.name.toLowerCase() !== "x-frame-options"
    ),
});

browser.webRequest.onHeadersReceived.addListener(
    handleReceivedHeaders,
    { urls: [ '<all_urls>' ] },
    [ 'blocking', 'responseHeaders' ],
);