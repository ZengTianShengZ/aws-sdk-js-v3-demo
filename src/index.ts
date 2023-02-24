import {
    S3Client,
    PutObjectCommand,
    CreateMultipartUploadCommand,
    UploadPartCommand,
    CompleteMultipartUploadCommand,
    PutObjectCommandOutput,
} from '@aws-sdk/client-s3';

class Oss {
    initS3Client(options = {}) {
        const _options = {
            endpoint: 'https://example.com',
            region: 'zh',
            forcePathStyle: false,
            tls: true,
            credentials: {
                accessKeyId: '',
                secretAccessKey: '',
                sessionToken: '',
            },
            systemClockOffset: 31162, // current_server_time ? current_server_time - Date.now() : 0,
        };
        Object.assign(_options, options);
        const client = new S3Client(_options);
        return client;
    }
}

new Oss().initS3Client();
