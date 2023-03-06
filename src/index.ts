import Oss from './oss';

const resEle: any = document.querySelector('#J_res');

document.querySelector('#J_input')?.addEventListener('change', (e: any) => {
    const file = e.target.files[0];
    const oss = new Oss({
        security_token:
            'CAISpAR1q6Ft5B2yfSjIr5f5PYuNnbRE8bupah7Qg1VhOLoUq7XDiTz2IH1OeHBhAegfsPs1mGlX6vYclrh8R5JeREPCKMd567wLqljwMtIpUA1zbuRW5qe+EE2/VjR6tq27OpdyJrGwU/OpbE++LUYRpZLxaTSlWXG8LJSNkuQJR98LXw6+H+gvZrJRPRAwh8IGEnHTOP2xUHvtmXGCNFd0nQB+hGhji8G42dbOxRfCq1f4x+QJxeH2OYP2V9RwG519XtypvopxbbGT7TZU7BFGzK5skM43/izc7PCbAkVQ6gmLFvfQ7tx3JRVlW7A+HKdIzov7juYqkevWj4D61xtoIOVJUjzWXpyd2M/DEe/LRtEibuTfOm/R982LKpjtuhk4XGofMwpGYLhRLWRrWzUmTSvGD7Kj5FHSax2/drCB16g6q3EcrTPS8MGNOkKETpiAzC8cIeVcVU4zMAMM1mGTfc11egdXIVR8HOTXH8chYxxTsqLnu0jeXyglwHhL3bf3bOiEvbsEO8etHMBJ3YcGZZtA9mcjShH5Qq7pyBtPLz00I/pf27K/PoSkuv3XgrecbePdC/8B/1lTdHXfpjbKCy8LdnygoZ8BEQPGpZ2Alf2Wo8g7SFJzvo1lYFvbIYo3nTtP+LCv6hmfyujnX02x83AwktuipNQVtRI1Jq/93bDI4meB4CzOe9U1kcLNUWhhQBC6fnV/yf+fnHUDqgDoYpI4yI6OgRqAAQOYYRta4YWiZR5jt/kqRoOCuZzSor0Irfk3touVxfQtVudVVQy3cqb/aW3nxQa5F50LjSB5AsD1U+i90exD1DAtlosWheF1ShwmyQyfEZ7dEWE2i/UGOleK6tZOKZHJom7pJmZzoUnOp4TuG4K6y42jV6H08pvdw7FUroL8FI9o',
        access_key_id: 'STS.NTLv19pkeFyBh8agU4458Dphk',
        access_key_secret: 'BQb3igsgnWQyRK9GEhMrvX6gUcuFQBUmLnMtRef4Z8Cz',
        endpoint: 'https://oss-cn-hangzhou.aliyuncs.com',
        region: 'oss-cn-hangzhou',
        bucket_name: 'gdesign-dam-fat',
        object_name: '23337539871843399/3f268054eb1a4940960aa007d2536b2a.png',
    });

    oss.upload(file)
        .then((res) => {
            console.log('==res==', res);
            resEle.innerText = JSON.stringify(res, null, 4);
        })
        .catch((err) => {
            console.log('===err===', err);
            resEle.innerText = JSON.stringify(err, null, 4);
        });
});
