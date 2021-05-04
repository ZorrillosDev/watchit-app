const EventEmitter = require('events')
const WebTorrent = require('webtorrent')
const log = require('logplease').create('TORRENT')

module.exports = class BrowserStreamer extends EventEmitter {

    _client(opts) {
        log.info('Running WebTorrent')
        return new WebTorrent(opts);
    }

    runServer() {
        // abstract method
    }

    onReady() {
        this.started = true;
        this.flix.file.renderTo(this.flix.videoRef, {
            autoplay: true
        }, () => this.emit('start', {}))
    }

}