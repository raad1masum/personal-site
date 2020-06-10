import React from 'react';
import './App.css';
import './css/style.css';

function App() {
    return (
        <div>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <link href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap" rel="stylesheet" />
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossOrigin="anonymous" />
            <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
            <link rel="shortcut icon" type="image/png" href="./img/parrot_round.png" />
            <link rel="icon" type="image/png" href="./img/parrot_round.png" />
            <link rel="stylesheet" href="./css/style.css" />
            <title>Raadwan Masum</title>
            <svg width={0} height={0} className="hidden">
                <symbol viewBox="0 0 85 28.801" fill="none" strokeLinecap="square" strokeMiterlimit={10} xmlns="http://www.w3.org/2000/svg" id="python">
                    <clipPath id="a">
                        <path d="M0 0h85v28.8H0V0z" />
                    </clipPath>
                    <g clipPath="url(#a)">
                        <path fill="#000" fillOpacity={0} d="M0 0h85v28.8H0z" fillRule="evenodd" />
                        <path fill="#3572a5" d="M0 12.451C0 8.06 3.631 4.5 8.11 4.5c2.151 0 4.214.838 5.735 2.329a7.875 7.875 0 0 1 2.375 5.623c0 4.393-3.63 7.953-8.11 7.953-4.479 0-8.11-3.56-8.11-7.953z" fillRule="evenodd" />
                        <path fill="#000" fillOpacity={0} d="M11.795 3.396h72.63v18.11h-72.63z" fillRule="evenodd" />
                        <path fill="#fff" d="M28.014 11.436q0 1.297-.687 1.907-.688.61-2.032.61h-1.672v4.358h-1.39V7.108h3.031q1.36 0 2.047.61.703.593.703 1.89v1.828zm-1.39-1.968q0-.61-.282-.875-.281-.282-.89-.282h-1.829v4.454h1.829q.609 0 .89-.282.281-.28.281-.89V9.468zm5.686 10.36q.39 0 .578-.142.188-.14.297-.5l.219-.875h-.328l-2.625-8h1.469l2 6.704 1.734-6.704h1.39l-2.468 8.86q-.219.828-.531 1.219-.297.406-.672.515-.375.125-.969.125h-.766v-1.203h.672zm10.672-1.517q-.813 0-1.25-.53-.422-.532-.422-1.391v-4.875h-1.516V10.31h1.516V8.39h1.36v1.921h2.327v1.204H42.67v4.953q0 .36.172.5t.547.14h1.61v1.203h-2.016zm6.483-11.203v3.516q.485-.313 1.203-.313h.735q1.297 0 1.922.61.64.61.64 1.953v5.437h-1.36v-5.765q0-.469-.28-.75-.282-.281-.766-.281h-1.047q-.515 0-.781.265-.25.266-.266.563v5.968h-1.36V7.108h1.36zm13.187 8.64q0 1.345-.672 1.954-.656.61-2.047.61h-.53q-1.391 0-2.063-.61-.657-.61-.657-1.953v-2.875q0-1.344.657-1.953.672-.61 2.062-.61h.531q1.391 0 2.047.61.672.61.672 1.953v2.875zm-1.36-3.202q0-.485-.312-.75-.297-.281-.89-.281h-.844q-.594 0-.906.28-.297.266-.297.75v3.532q0 .484.297.766.312.265.906.265h.844q.593 0 .89-.265.313-.282.313-.766v-3.531zm5.375-2.235v.391q.5-.39 1.281-.39h.735q1.297 0 1.922.609.64.61.64 1.953v5.437h-1.359v-5.765q0-.469-.281-.75-.282-.281-.766-.281h-1.047q-.531 0-.797.28-.25.282-.25.595v5.921h-1.359v-8h1.281z">
                        </path>
                    </g>
                </symbol>
                <symbol viewBox="0 0 65 28.801" fill="none" strokeLinecap="square" strokeMiterlimit={10} xmlns="http://www.w3.org/2000/svg" id="html">
                    <clipPath id="a">
                        <path d="M0 0h65v28.8H0V0z" />
                    </clipPath>
                    <g clipPath="url(#a)">
                        <path fill="#000" fillOpacity={0} d="M0 0h65v28.8H0z" fillRule="evenodd" />
                        <path fill="#e34c26" d="M0 12.451C0 8.06 3.631 4.5 8.11 4.5c2.151 0 4.214.838 5.735 2.329a7.875 7.875 0 0 1 2.375 5.623c0 4.393-3.63 7.953-8.11 7.953-4.479 0-8.11-3.56-8.11-7.953z" fillRule="evenodd" />
                        <path fill="#000" fillOpacity={0} d="M11.795 3.396h54.11v18.11h-54.11z" fillRule="evenodd" />
                        <path fill="#fff" d="M23.467 13.155v5.156h-1.39V7.108h1.39v4.86h3.297v-4.86h1.39v11.203h-1.39v-5.156h-3.297zm9.578 5.156V8.327h-2.532V7.108h6.47v1.22H34.45v9.983h-1.406zm9.983-3.765H41.7l-1.562-6.281V18.31h-1.219V7.108h2.234l1.282 5.735 1.28-5.735h2.173v11.203h-1.25V8.265l-1.61 6.28zm6.922-7.438v9.985h3.562v1.218H48.56V7.108h1.39z">
                        </path>
                    </g>
                </symbol>
                <symbol viewBox="0 0 55 28.801" fill="none" strokeLinecap="square" strokeMiterlimit={10} xmlns="http://www.w3.org/2000/svg" id="css">
                    <clipPath id="a">
                        <path d="M0 0h55v28.8H0V0z" />
                    </clipPath>
                    <g clipPath="url(#a)">
                        <path fill="#000" fillOpacity={0} d="M0 0h55v28.8H0z" fillRule="evenodd" />
                        <path fill="#563d7c" d="M0 12.451C0 8.06 3.631 4.5 8.11 4.5c2.151 0 4.214.838 5.735 2.329a7.875 7.875 0 0 1 2.375 5.623c0 4.393-3.63 7.953-8.11 7.953-4.479 0-8.11-3.56-8.11-7.953z" fillRule="evenodd" />
                        <path fill="#000" fillOpacity={0} d="M11.795 3.396h45.323v18.11H11.795z" fillRule="evenodd" />
                        <path fill="#fff" d="M25.42 18.311q-1.39 0-2.14-.671-.735-.688-.735-2.047V9.827q0-1.36.735-2.031.75-.688 2.14-.688h2.266v1.22h-2.422q-.594 0-.969.358-.36.344-.36.844v6.36q0 .5.36.859.375.344.969.344h2.422v1.218H25.42zm11.047-2.718q0 1.36-.75 2.047-.75.671-2.141.671H31.31v-1.218h2.422q.594 0 .953-.344.375-.36.375-.86v-1.656q0-.484-.25-.78-.234-.298-.734-.298h-.484q-1.188 0-1.875-.687-.688-.703-.688-2.032v-.609q0-1.36.75-2.031.75-.688 2.14-.688h2.282v1.22h-2.453q-.578 0-.953.358-.375.344-.375.844v1.219q0 .484.312.812.328.329.844.329h.484q1.14 0 1.766.656.64.656.64 1.984v1.063zm8.64 0q0 1.36-.75 2.047-.75.671-2.141.671H39.95v-1.218h2.422q.594 0 .953-.344.375-.36.375-.86v-1.656q0-.484-.25-.78-.234-.298-.734-.298h-.484q-1.188 0-1.875-.687-.688-.703-.688-2.032v-.609q0-1.36.75-2.031.75-.688 2.14-.688h2.282v1.22h-2.453q-.578 0-.953.358-.375.344-.375.844v1.219q0 .484.312.812.328.329.844.329h.484q1.14 0 1.766.656.64.656.64 1.984v1.063z">
                        </path>
                    </g>
                </symbol>
                <symbol viewBox="0 0 96 28.801" fill="none" strokeLinecap="square" strokeMiterlimit={10} xmlns="http://www.w3.org/2000/svg" id="javascript">
                    <clipPath id="a">
                        <path d="M0 0h96v28.8H0V0z" />
                    </clipPath>
                    <g clipPath="url(#a)">
                        <path fill="#000" fillOpacity={0} d="M0 0h96v28.8H0z" fillRule="evenodd" />
                        <path fill="#f1e05a" d="M1 12.442C1 8.05 4.631 4.49 9.11 4.49a8.19 8.19 0 0 1 5.735 2.329 7.875 7.875 0 0 1 2.375 5.623c0 4.392-3.63 7.953-8.11 7.953-4.479 0-8.11-3.56-8.11-7.953z" fillRule="evenodd" />
                        <path fill="#000" fillOpacity={0} d="M11.213 3.386h94.047v18.11H11.213z" fillRule="evenodd" />
                        <path fill="#fff" d="M25.134 14.914q0 1.031-.562 1.547-.563.5-1.594.5h-1.265v-.906h1.375q.453 0 .718-.266.282-.266.282-.64V9.46H22.15v-.906h2.984v6.36zm6.559 2.047q-.157 0-.344-.094-.188-.094-.313-.265-.28.359-.734.359H29.24q-.922 0-1.344-.36-.406-.374-.406-1.265v-.234q0-1.86 1.765-1.86h1.485v-.594q0-.375-.235-.578-.219-.203-.672-.203h-1.86v-.906h1.75q1.032 0 1.532.453t.5 1.469v2.875q0 .187.14.281.141.078.454.078v.844h-.656zm-1.516-.906q.375 0 .469-.157.094-.171.094-.437v-1.313h-1.5q-.313 0-.516.204-.203.203-.203.515v.594q0 .312.14.453.141.14.454.14h1.062zm3.761-5.094h1.11l1.406 5.172 1.36-5.172h1.077l-1.734 6h-1.469l-1.75-6zm10.715 6q-.157 0-.344-.094-.188-.094-.313-.265-.28.359-.734.359H42.2q-.922 0-1.344-.36-.406-.374-.406-1.265v-.234q0-1.86 1.765-1.86H43.7v-.594q0-.375-.235-.578-.219-.203-.672-.203h-1.859v-.906h1.75q1.031 0 1.531.453t.5 1.469v2.875q0 .187.14.281.141.078.454.078v.844h-.656zm-1.516-.906q.375 0 .469-.157.094-.171.094-.437v-1.313h-1.5q-.313 0-.516.204-.203.203-.203.515v.594q0 .312.14.453.141.14.454.14h1.062zm8.261-1.14q0 1.03-.562 1.546-.547.5-1.594.5H47.54v-.906h1.828q.438 0 .703-.266.282-.266.282-.64v-1.25q0-.36-.188-.579-.172-.218-.547-.218h-.36q-.89 0-1.405-.516-.516-.531-.516-1.531v-.453q0-1.016.547-1.532.562-.515 1.61-.515h1.718v.922h-1.844q-.437 0-.719.265-.265.266-.265.625v.922q0 .375.234.625.235.234.625.234h.36q.843 0 1.312.5.484.485.484 1.485v.781zm4.7 2.046q-1.063 0-1.563-.453-.485-.453-.485-1.469v-2.156q0-1.016.5-1.469.5-.453 1.547-.453h1.547v.906h-1.672q-.437 0-.672.203-.234.203-.234.578v2.625q0 .375.234.579.235.203.672.203h1.672v.906h-1.547zm5.073-.906v-4.188h-.875v-.906h1.828v.328q.406-.328.969-.328h1.234v.953h-1.36q-.39 0-.577.25-.188.25-.203.5v3.39h1.312v.907h-3.203v-.906h.875zm8.199-7.5v1.093h-1.14V8.555h1.14zm-2.844 3.312v-.906h2.797v5.094h1.766v.906h-2.797v-5.094h-1.766zm7.527-.906v.281q.375-.281.969-.281h.422q1.062 0 1.546.453.5.453.5 1.469v2.156q0 1.016-.5 1.469-.5.453-1.546.453h-1.329v2.047H73.1V10.96h.953zm.844.906q-.39 0-.594.203-.188.203-.188.453v3.532h1.454q.437 0 .671-.203.235-.204.235-.579v-2.625q0-.375-.235-.578-.234-.203-.671-.203h-.672zm7.323 5.094q-.609 0-.937-.39-.328-.407-.328-1.048v-3.656h-1.14v-.906h1.14V9.523h1.015v1.438h1.766v.906H81.97v3.719q0 .266.125.375.141.094.422.094h1.22v.906H82.22z">
                        </path>
                    </g>
                </symbol>
                <symbol viewBox="0 0 75 28.801" fill="none" strokeLinecap="square" strokeMiterlimit={10} xmlns="http://www.w3.org/2000/svg" id="shell">
                    <clipPath id="a">
                        <path d="M0 0h75v28.8H0V0z" />
                    </clipPath>
                    <g clipPath="url(#a)">
                        <path fill="#000" fillOpacity={0} d="M0 0h75v28.8H0z" fillRule="evenodd" />
                        <path fill="#89e051" d="M0 12.451C0 8.06 3.631 4.5 8.11 4.5c2.151 0 4.214.838 5.735 2.329a7.875 7.875 0 0 1 2.375 5.623c0 4.393-3.63 7.953-8.11 7.953-4.479 0-8.11-3.56-8.11-7.953z" fillRule="evenodd" />
                        <path fill="#000" fillOpacity={0} d="M11.795 3.396h62.898v18.11H11.795z" fillRule="evenodd" />
                        <path fill="#fff" d="M27.827 15.593q0 1.36-.75 2.047-.75.671-2.141.671H22.67v-1.218h2.422q.594 0 .953-.344.375-.36.375-.86v-1.656q0-.484-.25-.78-.234-.298-.734-.298h-.484q-1.188 0-1.875-.687-.688-.703-.688-2.032v-.609q0-1.36.75-2.031.75-.688 2.14-.688h2.282v1.22h-2.453q-.578 0-.953.358-.375.344-.375.844v1.219q0 .484.312.812.328.329.844.329h.484q1.14 0 1.766.656.64.656.64 1.984v1.063zm4.358-8.485v3.516q.485-.313 1.203-.313h.735q1.297 0 1.922.61.64.61.64 1.953v5.437h-1.36v-5.765q0-.469-.28-.75-.282-.281-.766-.281h-1.047q-.515 0-.781.265-.25.266-.266.563v5.968h-1.36V7.108h1.36zm10.11 11.203q-1.407 0-2.063-.593-.657-.61-.657-1.97v-2.874q0-1.375.594-1.969.594-.594 1.969-.594h.75q1.14 0 1.719.641.593.625.593 1.844v2.078h-4.265v1.203q0 .484.297.766.312.265.906.265h2.547v1.203h-2.39zm1.577-5.843q0-.407-.281-.672-.266-.281-.688-.281h-.921q-.579 0-.813.265-.234.266-.234.766v1.125h2.937v-1.203zm7.671 5.843q-.546 0-.953-.375-.406-.39-.406-1.218V8.31H47.84V7.108h3.703v9.516q0 .266.125.375.141.11.438.11h2.125v1.202h-2.688zm8.64 0q-.546 0-.953-.375-.406-.39-.406-1.218V8.31H56.48V7.108h3.703v9.516q0 .266.125.375.141.11.438.11h2.125v1.202h-2.688z">
                        </path>
                    </g>
                </symbol>
                <symbol viewBox="0 0 150 28.801" fill="none" strokeLinecap="square" strokeMiterlimit={10} xmlns="http://www.w3.org/2000/svg" id="jupyternotebook">
                    <clipPath id="a">
                        <path d="M0 0h150v28.8H0V0z" />
                    </clipPath>
                    <g clipPath="url(#a)">
                        <path fill="#000" fillOpacity={0} d="M0 0h150v28.8H0z" fillRule="evenodd" />
                        <path fill="#da5b0b" d="M0 12.607c0-3.826 3.166-6.929 7.07-6.929a7.14 7.14 0 0 1 5 2.03 6.86 6.86 0 0 1 2.072 4.9c0 3.826-3.166 6.929-7.071 6.929S0 16.434 0 12.607z" fillRule="evenodd" />
                        <path fill="#000" fillOpacity={0} d="M7.239 3.551h133.008v18.11H7.239z" fillRule="evenodd" />
                        <path fill="#fff" d="M19.52 13.927q0 .672-.375 1.016-.375.343-1.062.343h-.844v-.61h.922q.297 0 .468-.171.188-.172.188-.422v-3.797h-1.281v-.593h1.984v4.234zm3.976 1.172q-.265.187-.64.187h-.266q-.656 0-.969-.297-.312-.312-.312-.984v-2.719h.672v2.875q0 .25.14.39.14.142.375.142h.438q.25 0 .375-.125.125-.141.14-.297v-2.985h.688v4h-.64V15.1zm2.726-3.813v.188q.235-.188.625-.188h.297q.703 0 1.032.297.328.297.328.985v1.437q0 .672-.344.984-.328.297-1.016.297h-.89v1.36h-.672v-5.36h.64zm.547.594q-.265 0-.39.14-.125.141-.125.313v2.36h.968q.297 0 .438-.141.156-.14.156-.39v-1.75q0-.25-.156-.391-.14-.141-.438-.141h-.453zm3.867 4.172q.188 0 .281-.078.11-.078.157-.25l.11-.438h-.157l-1.328-4h.734l1 3.36.875-3.36h.703l-1.25 4.438q-.094.406-.25.594-.156.203-.344.265-.187.063-.484.063h-.375v-.594h.328zm5.336-.766q-.406 0-.625-.265-.219-.266-.219-.688V11.88h-.75v-.594h.75v-.953h.688v.953h1.171v.594h-1.171v2.484q0 .172.078.25.093.079.28.079h.813v.593h-1.015zm3.976 0q-.703 0-1.031-.297-.328-.296-.328-.984v-1.437q0-.688.296-.985.297-.297.985-.297h.375q.562 0 .86.313.296.312.296.922v1.047h-2.125v.593q0 .25.14.39.157.142.454.142h1.265v.593h-1.187zm.781-2.922q0-.203-.14-.343-.125-.141-.329-.141h-.468q-.297 0-.407.14-.109.126-.109.391v.563h1.453v-.61zm2.82 2.329V11.88h-.594v-.594h1.235v.219q.25-.219.625-.219h.828v.64h-.906q-.25 0-.375.173-.125.156-.141.328v2.266h.875v.593h-2.14v-.593h.593zm8.53.593h-.656V9.693h1.141l1.266 5v-5h.656v5.593H53.33l-1.25-5.015v5.015zm6.68-1.281q0 .672-.328.984-.328.297-1.031.297h-.25q-.704 0-1.047-.297-.328-.312-.328-.984v-1.437q0-.672.328-.97.343-.312 1.047-.312h.25q.703 0 1.03.313.329.297.329.969v1.437zm-.672-1.594q0-.25-.156-.39-.156-.141-.438-.141h-.437q-.297 0-.453.14-.14.141-.14.391v1.75q0 .25.14.39.156.142.453.142h.437q.282 0 .438-.141.156-.14.156-.39v-1.75zm3.804 2.875q-.406 0-.625-.265-.218-.266-.218-.688V11.88h-.75v-.594h.75v-.953h.687v.953h1.172v.594h-1.172v2.484q0 .172.078.25.094.079.282.079h.812v.593h-1.016zm3.977 0q-.703 0-1.032-.297-.328-.296-.328-.984v-1.437q0-.688.297-.985.297-.297.985-.297h.375q.562 0 .859.313.297.312.297.922v1.047h-2.125v.593q0 .25.14.39.157.142.454.142h1.265v.593h-1.187zm.78-2.922q0-.203-.14-.343-.125-.141-.328-.141h-.469q-.296 0-.406.14-.11.126-.11.391v.563h1.454v-.61zm5.055 1.641q0 .672-.344.984-.328.297-1.015.297H68.78V9.693h.672v1.75q.235-.157.594-.157h.297q.703 0 1.031.297.328.297.328.985v1.437zM69.97 11.88q-.266 0-.39.14-.126.141-.126.313v2.36h.969q.297 0 .437-.141.157-.14.157-.39v-1.75q0-.25-.157-.391-.14-.141-.437-.141h-.453zm6.07 2.125q0 .672-.328.984-.328.297-1.032.297h-.25q-.703 0-1.046-.297-.329-.312-.329-.984v-1.437q0-.672.329-.97.343-.312 1.046-.312h.25q.704 0 1.032.313.328.297.328.969v1.437zm-.672-1.594q0-.25-.156-.39-.157-.141-.438-.141h-.437q-.297 0-.453.14-.141.141-.141.391v1.75q0 .25.14.39.157.142.454.142h.437q.281 0 .438-.141.156-.14.156-.39v-1.75zm4.992 1.594q0 .672-.328.984-.329.297-1.032.297h-.25q-.703 0-1.047-.297-.328-.312-.328-.984v-1.437q0-.672.328-.97.344-.312 1.047-.312H79q.703 0 1.032.313.328.297.328.969v1.437zm-.672-1.594q0-.25-.156-.39-.157-.141-.438-.141h-.437q-.297 0-.454.14-.14.141-.14.391v1.75q0 .25.14.39.157.142.454.142h.437q.281 0 .438-.141.156-.14.156-.39v-1.75zm2.804 1.157v1.718h-.687V9.693h.687v3.015l1.25-1.422h.86l-1.391 1.578 1.5 2.422h-.844l-1.172-1.953-.203.235z">
                        </path>
                    </g>
                </symbol>
                <symbol viewBox="0 0 55 28.801" fill="none" strokeLinecap="square" strokeMiterlimit={10} xmlns="http://www.w3.org/2000/svg" id="c++">
                    <clipPath id="a">
                        <path d="M0 0h55v28.8H0V0z" />
                    </clipPath>
                    <g clipPath="url(#a)">
                        <path fill="#000" fillOpacity={0} d="M0 0h55v28.8H0z" fillRule="evenodd" />
                        <path fill="#f34b7d" d="M0 12.451C0 8.06 3.631 4.5 8.11 4.5c2.151 0 4.214.838 5.735 2.329a7.875 7.875 0 0 1 2.375 5.623c0 4.393-3.63 7.953-8.11 7.953-4.479 0-8.11-3.56-8.11-7.953z" fillRule="evenodd" />
                        <path fill="#000" fillOpacity={0} d="M11.795 3.396h45.323v18.11H11.795z" fillRule="evenodd" />
                        <path fill="#fff" d="M25.42 18.311q-1.39 0-2.14-.671-.735-.688-.735-2.047V9.827q0-1.36.735-2.031.75-.688 2.14-.688h2.266v1.22h-2.422q-.594 0-.969.358-.36.344-.36.844v6.36q0 .5.36.859.375.344.969.344h2.422v1.218H25.42zm7.703-1.89v-2.516H30.7v-1.187h2.422v-2.532h1.265v2.532h2.407v1.187h-2.407v2.516h-1.265zm8.64 0v-2.516H39.34v-1.187h2.422v-2.532h1.265v2.532h2.407v1.187h-2.407v2.516h-1.265z">
                        </path>
                    </g>
                </symbol>
                <symbol viewBox="0 0 30 28.801" fill="none" strokeLinecap="square" strokeMiterlimit={10} xmlns="http://www.w3.org/2000/svg" id="r">
                    <clipPath id="a">
                        <path d="M0 0h30v28.8H0V0z" />
                    </clipPath>
                    <g clipPath="url(#a)">
                        <path fill="#000" fillOpacity={0} d="M0 0h30v28.8H0z" fillRule="evenodd" />
                        <path fill="#29e" d="M0 12.451C0 8.06 3.631 4.5 8.11 4.5c2.151 0 4.214.838 5.735 2.329a7.875 7.875 0 0 1 2.375 5.623c0 4.393-3.63 7.953-8.11 7.953-4.479 0-8.11-3.56-8.11-7.953z" fillRule="evenodd" />
                        <path fill="#000" fillOpacity={0} d="M11.795 3.396h45.323v18.11H11.795z" fillRule="evenodd" />
                        <path fill="#fff" d="M23.31 13.67v4.641h-1.39V7.108h3q1.36 0 2.047.61.703.593.703 1.89v1.532q0 1.812-1.437 2.265l2.219 4.906h-1.516l-2.063-4.64h-1.562zm2.97-4.202q0-.61-.282-.875-.28-.282-.89-.282H23.31v4.157h1.797q.61 0 .89-.282.282-.28.282-.89V9.468z">
                        </path>
                    </g>
                </symbol>
                <symbol viewBox="0 0 65 28.801" fill="none" strokeLinecap="square" strokeMiterlimit={10} xmlns="http://www.w3.org/2000/svg" id="java">
                    <clipPath id="a">
                        <path d="M0 0h65v28.8H0V0z" />
                    </clipPath>
                    <g clipPath="url(#a)">
                        <path fill="#000" fillOpacity={0} d="M0 0h65v28.8H0z" fillRule="evenodd" />
                        <path fill="#b07219" d="M0 12.451C0 8.06 3.631 4.5 8.11 4.5c2.151 0 4.214.838 5.735 2.329a7.875 7.875 0 0 1 2.375 5.623c0 4.393-3.63 7.953-8.11 7.953-4.479 0-8.11-3.56-8.11-7.953z" fillRule="evenodd" />
                        <path fill="#000" fillOpacity={0} d="M11.795 3.396h54.11v18.11h-54.11z" fillRule="evenodd" />
                        <path fill="#fff" d="M27.358 15.593q0 1.36-.75 2.047-.735.671-2.125.671h-1.688v-1.218h1.844q.594 0 .953-.344.375-.36.375-.86V8.312H23.39V7.108h3.969v8.485zm8.75 2.718q-.204 0-.454-.125t-.422-.359q-.375.484-.984.484h-1.422q-1.219 0-1.766-.484-.547-.484-.547-1.672v-.328q0-2.469 2.329-2.469h1.984v-.812q0-.485-.313-.75-.296-.281-.89-.281h-2.469V10.31h2.313q1.39 0 2.046.61.672.61.672 1.953v3.844q0 .234.188.36.187.108.61.108v1.125h-.876zm-2.016-1.203q.484 0 .609-.218.125-.22.125-.579v-1.765h-2q-.422 0-.688.281-.265.266-.265.688v.796q0 .422.187.61.188.187.61.187h1.422zm5.015-6.797h1.468l1.875 6.891 1.813-6.89h1.422l-2.297 8h-1.969l-2.312-8zm14.28 8q-.203 0-.453-.125t-.422-.359q-.375.484-.984.484h-1.422q-1.219 0-1.766-.484-.547-.484-.547-1.672v-.328q0-2.469 2.329-2.469h1.984v-.812q0-.485-.313-.75-.296-.281-.89-.281h-2.469V10.31h2.313q1.39 0 2.046.61.672.61.672 1.953v3.844q0 .234.188.36.187.108.61.108v1.125h-.876zm-2.015-1.203q.484 0 .609-.218.125-.22.125-.579v-1.765h-2q-.422 0-.688.281-.265.266-.265.688v.796q0 .422.187.61.188.187.61.187h1.422z">
                        </path>
                    </g>
                </symbol>
            </svg>
            <nav className="navbar navbar-expand-lg navbar-dark navbar-inverse navbar-fixed-top static-top sticky" id="navigation" data-aos="zoom-in-down">
                <a className="navbar-brand" href="#" style={{ color: '#00e5ee' }}><img className="rotate" style={{ width: '2rem', marginRight: '1rem' }} src="./img/parrot_clear.png" />Raadwan Masum</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="nav navbar-nav ml-auto" style={{ float: 'right' }}>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#awards">Awards</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#projects">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#teams">Teams</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="container text-center align-middle main-box">
                <div className="output" id="output">
                    <h1 className="typewriter1" style={{ fontSize: '50px', color: '#00e5ee' }} />
                    <p className="typewriter2" style={{ fontSize: '30px' }} />
                </div>
            </div>
            <div className="container text-center align-middle box" style={{ height: '700px' }} id="about">
                <h1 className="title">About</h1>
                <hr data-aos="zoom-in" />
                <h1 className="main-content about" style={{ fontSize: '35px' }} data-aos="zoom-in-up"> I'm Raadwan Masum, but I go by
                "Gravity" and
                "SamosaSauce" online. I
                do everything from cybersecurity and robotics to web development and
                competitive programming. I compete in many competitions such as the
            <a href="https://www.uscyberpatriot.org/" target="_blank" style={{ color: 'inherit', textDecoration: 'underline' }}>AFA CyberPatriot</a>,
            <a href="https://www.firstinspires.org/robotics/frc" target="_blank" style={{ color: 'inherit', textDecoration: 'underline' }}>FIRST Robotics
              Competition</a>, various hackathons, and competitive programming competitions.
            Computers, mathematics, and science help explain the world around me,
            I don't know what I would do without them.</h1>
            </div>
            <div className="container text-center align-middle box" style={{ height: '600px' }} id="awards">
                <h1 className="title awards-title">Awards</h1>
                <hr data-aos="zoom-in" />
                <div className="main-content" data-aos="zoom-in-up">
                    <div role="tablist" id="accordion-1" style={{ marginBottom: '30px', color: 'rgb(255,255,255)', borderRadius: '10px', borderColor: '#31363f' }} className="awards-accordion">
                        <div className="card" style={{ backgroundColor: '#23262f' }}>
                            <a data-toggle="collapse" aria-expanded="false" aria-controls="accordion-1 .item-1" href="#accordion-1 .item-1" style={{ color: 'rgb(255,255,255)' }} className="collapsed">
                                <div className="card-header" role="tab" style={{ backgroundColor: '#23262f' }}>
                                    <h5 className="mb-0">Hackathons &amp; Coding</h5>
                                </div>
                            </a>
                            <div className="item-1 collapse" role="tabpanel" data-parent="#accordion-1" style={{ backgroundColor: '#23262f' }}>
                                <div className="card-body">
                                    <p className="card-text text-left award">2020 World Hackathon Day (1,133 participants) - <span className="award-highlight">Work &amp; Economy Track Winner</span></p>
                                    <p className="card-text text-left award">2020 Harmony Hacks (164 participants) - <span className="award-highlight">Wolfram Award</span></p>
                                    <p className="card-text text-left award">2020 HackDSC Hackathon (178 participants) - <span className="award-highlight">Best Use of Google Cloud Award</span></p>
                                    <p className="card-text text-left award">2020 HackDSC Hackathon (178 participants) - <span className="award-highlight">Honorable Mention</span></p>
                                    <p className="card-text text-left award">2020 StanHacks 2 Hackathon (223 participants) - <span className="award-highlight">Best Social Good Award</span></p>
                                    <p className="card-text text-left award">2020 Hack The Helyx Hackathon (156 participants) -
                      <span className="award-highlight">Best Design Award</span></p>
                                    <p className="card-text text-left award">2019 Francis Parker W.A.R. Lords Hackathon (102
                                    participants) -
                      <span className="award-highlight">1st Place</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="card" style={{ backgroundColor: '#23262f' }}>
                            <a data-toggle="collapse" aria-expanded="false" aria-controls="accordion-1 .item-2" href="#accordion-1 .item-2" style={{ color: 'rgb(255,255,255)' }} className="collapsed">
                                <div className="card-header" role="tab" style={{ backgroundColor: '#23262f' }}>
                                    <h5 className="mb-0">Cybersecurity &amp; Hacking</h5>
                                </div>
                            </a>
                            <div className="item-2 collapse" role="tabpanel" data-parent="#accordion-1" style={{ backgroundColor: '#23262f' }}>
                                <div className="card-body">
                                    <p className="card-text text-left award" style={{ textDecoration: 'underline' }}>Air Force
                                    Association's
                      CyberPatriot XII</p>
                                    <p className="card-text text-left award">  AFA CyberPatriot XII National Finals -
                      <span className="award-highlight">6th Place</span></p>
                                    <p className="card-text text-left award">  AFA CyberPatriot XII Cisco Networking
                                    Challenge -
                      <span className="award-highlight">4th Place</span></p>
                                    <p className="card-text text-left award">  AFA CyberPatriot XII Season - <span className="award-highlight">National Finalist</span></p>
                                    <p className="card-text text-left award">  AFA CyberPatriot XII Semifinals Round
                                    (3,630
                      Teams) - <span className="award-highlight">11th Place</span></p>
                                    <p className="card-text text-left award">  AFA CyberPatriot XII State Round (3,630
                                    Teams) -
                      <span className="award-highlight">7th Place</span></p>
                                    <p className="card-text text-left award">  AFA CyberPatriot XII Qualification
                                    Round 2
                                    (3,630
                      Teams) - <span className="award-highlight">13th Place</span></p>
                                    <p className="card-text text-left award">  AFA CyberPatriot XII Qualification
                                    Round 1
                                    (3,630
                      Teams) - <span className="award-highlight">28th Place</span></p>
                                    <p className="card-text text-left award" style={{ textDecoration: 'underline' }}>Capture The
                                    Flag
                                    (CTF)
                    </p>
                                    <p className="card-text text-left award">  2020 ångstromCTF (1,782 teams) - <span className="award-highlight">109th Place</span></p>
                                    <p className="card-text text-left award">  2020 TAMUctf (30 teams) - <span className="award-highlight">20th Place</span></p>
                                    <p className="card-text text-left award">  2020 FireShell CTF (308 teams) - <span className="award-highlight">60th Place</span></p>
                                    <p className="card-text text-left award">  2020 AUCTF (1184 teams) - <span className="award-highlight">303rd Place</span></p>
                                    <p className="card-text text-left award">  2019 PicoCTF (8,250 Teams) - <span className="award-highlight">122nd Place</span></p>
                                    <p className="card-text text-left award">  2019 CSAW Red Team Challenge (2,547
                                    Teams)
                                    -
                      <span className="award-highlight">69th Place</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="card" style={{ backgroundColor: '#23262f' }}>
                            <a data-toggle="collapse" aria-expanded="false" aria-controls="accordion-1 .item-3" href="#accordion-1 .item-3" style={{ color: 'rgb(255,255,255)' }}>
                                <div className="card-header" role="tab" style={{ backgroundColor: '#23262f' }}>
                                    <h5 className="mb-0">Science Competitions</h5>
                                </div>
                            </a>
                            <div className="collapse item-3" role="tabpanel" data-parent="#accordion-1" style={{ backgroundColor: '#23262f' }}>
                                <div className="card-body">
                                    <p className="card-text text-left award" style={{ textDecoration: 'underline' }}>2019 Science
                                    Olympiad San
                      Diego Regional Competition</p>
                                    <p className="card-text text-left award">  Overall Place (184 Teams) - <span className="award-highlight">1st Place</span></p>
                                    <p className="card-text text-left award">  Battery Buggy Event (184 Teams) - <span className="award-highlight">8th Place</span></p>
                                    <p className="card-text text-left award" style={{ textDecoration: 'underline' }}>2018 Science
                                    Olympiad
                      Southern California State Competition at CalTech</p>
                                    <p className="card-text text-left award">  Overall Place (30 Teams) - <span className="award-highlight">3rd Place</span></p>
                                    <p className="card-text text-left award">  Detector Building Event (30 Teams) -
                      <span className="award-highlight">7th Place</span></p>
                                    <p className="card-text text-left award" style={{ textDecoration: 'underline' }}>2018 Science
                                    Olympiad San
                      Diego Regional Competition</p>
                                    <p className="card-text text-left award">  Overall Place (168 Teams) - <span className="award-highlight">1st Place</span></p>
                                    <p className="card-text text-left award">  Hovercraft Event (168 Teams) - <span className="award-highlight">4th Place</span></p>
                                    <p className="card-text text-left award">  Battery Buggy Event (168 Teams) - <span className="award-highlight">10th Place</span></p>
                                    <p className="card-text text-left award">  Rocks and Minerals Event (168 Teams) -
                      <span className="award-highlight">15th Place</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="card" style={{ backgroundColor: '#23262f' }}>
                            <a data-toggle="collapse" aria-expanded="false" aria-controls="accordion-1 .item-4" href="#accordion-1 .item-4" style={{ color: 'rgb(255,255,255)' }}>
                                <div className="card-header" role="tab" style={{ backgroundColor: '#23262f' }}>
                                    <h5 className="mb-0">Volunteer Work</h5>
                                </div>
                            </a>
                            <div className="collapse item-4" role="tabpanel" data-parent="#accordion-1" style={{ backgroundColor: '#23262f' }}>
                                <div className="card-body">
                                    <p className="card-text text-left award">Raised $8,750 for African Drought Relief - <span className="award-highlight">30 Hours</span></p>
                                    <p className="card-text text-left award">Science Olympiad Student Coaching - <span className="award-highlight">100 Hours</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="card" style={{ backgroundColor: '#23262f' }}>
                            <a data-toggle="collapse" aria-expanded="false" aria-controls="accordion-1 .item-4" href="#accordion-1 .item-5" style={{ color: 'rgb(255,255,255)' }}>
                                <div className="card-header" role="tab" style={{ backgroundColor: '#23262f' }}>
                                    <h5 className="mb-0">Other</h5>
                                </div>
                            </a>
                            <div className="collapse item-5" role="tabpanel" data-parent="#accordion-1" style={{ backgroundColor: '#23262f' }}>
                                <div className="card-body">
                                    <p className="card-text text-left award">Muhammed Ali Humanitarian Award for raising $8,750
                                    for
                      African Drought Relief - <a href="./img/humanitarian_award.jpg" target="_blank"><span className="award-highlight" style={{ textDecoration: 'underline' }}>link to
                          award</span></a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container text-center align-middle box project-div" style={{ height: '1000px', marginTop: '150px' }} id="projects">
                    <h1 className="title">Projects</h1>
                    <hr data-aos="zoom-in" />
                    <div className="main-content project-container" style={{ marginTop: '25px' }} data-aos="zoom-in-up">
                        <div className="project-item">
                            <p className="project-title"><a className="project-link" href="https://github.com/raad1masum/ParrotSE" target="_blank">ParrotSE</a></p>
                            <p className="project-description">🦜 A Linux Scoring Engine for the CyberPatriot competition.</p>
                            <svg className="icon project-lang" height={35} width={80}>
                                <use xlinkHref="#python" />
                            </svg>
                        </div>
                        <div className="project-item">
                            <p className="project-title"><a className="project-link" href="https://github.com/RGBHack/AlzheimersAI" target="_blank">AlzheimersAI</a></p>
                            <p className="project-description">🧠 A website for early detection and tracking of Alzheimer's disease
                  using AI.</p>
                            <svg className="icon project-lang" height={40} width={200}>
                                <use xlinkHref="#jupyternotebook" />
                            </svg>
                        </div>
                        <div className="project-item">
                            <p className="project-title"><a className="project-link" href="https://github.com/raad1masum/Arduino-Weather-Station" target="_blank">Arduino-Weather-Station</a></p>
                            <p className="project-description">🌦 A system that monitors and logs weather conditions with Arduino.
                </p>
                            <svg className="icon project-lang" height={35} width={50}>
                                <use xlinkHref="#c++" />
                            </svg>
                        </div>
                        <div className="project-item">
                            <p className="project-title"><a className="project-link" href="https://github.com/raad1masum/Carbon-Footprint-Awareness-App" target="_blank">Carbon-Footprint-Awareness-App</a></p>
                            <p className="project-description">🧬 An AI app to spread awareness of peoples' carbon footprint.</p>
                            <svg className="icon project-lang" height={30} width={28}>
                                <use xlinkHref="#r" />
                            </svg>
                        </div>
                        <div className="project-item">
                            <p className="project-title"><a className="project-link" href="https://github.com/RGBHack/Spark" target="_blank">Spark</a></p>
                            <p className="project-description">⚡ An inovative and empowering all-in-one productivity website.</p>
                            <svg className="icon project-lang" height={35} width={60}>
                                <use xlinkHref="#html" />
                            </svg>
                        </div>
                        <div className="project-item">
                            <p className="project-title"><a className="project-link" href="https://github.com/Team-Optix-3749/Team3749-2020" target="_blank">Team3749-2020</a>
                            </p>
                            <p className="project-description">🤖 Awesome robot code for the 2020 FIRST® Robotics Competition.</p>
                            <svg className="icon project-lang" height={35} width={65}>
                                <use xlinkHref="#java" />
                            </svg>
                        </div>
                        {/* credit to safin for the langs */}
                    </div>
                    <div className="container text-center align-middle box" style={{ height: '700px', marginTop: '100px' }} id="teams">
                        <h1 className="title">Teams</h1>
                        <hr data-aos="zoom-in" />
                        <div className="main-content team-box" data-aos="zoom-in-up">
                            <a href="https://rgbhack.tk/" target="_blank">
                                <button className="team"><span className="team-name">RGBHack</span></button>
                            </a>
                            <a href="https://cyberaegis.tech/" target="_blank">
                                <button className="team"><span className="team-name">CyberAegis</span></button>
                            </a>
                            <a href="https://www.team3749.org/" target="_blank">
                                <button className="team"><span className="team-name">Team Optix
                      3749</span></button>
                            </a>
                            <a href="https://www.elevatethefuture.org/" target="_blank">
                                <button className="team"><span className="team-name">Elevate
                                the
                      Future</span></button>
                            </a>
                            <a href="https://github.com/DNHS-CS-Club/" target="_blank">
                                <button className="team"><span className="team-name team-dnhscs">DNHS
                      Computer Science</span></button>
                            </a>
                        </div>
                    </div>
                    <div className="container text-center align-middle box" id="contact" style={{ marginTop: '150px' }}>
                        <h1 className="title contact-title">Contact</h1>
                        <hr data-aos="zoom-in" />
                        <div className="main-content" data-aos="zoom-in-up">
                            <h1 className="contact" style={{ marginTop: '10px' }}>Email: <a href="mailto:piraadwan@gmail.com" target="_blank" className="contact-link">piraadwan@gmail.com</a></h1>
                            <h1 className="contact">Linkedin: <a href="https://www.linkedin.com/in/raadwan-masum-9147bb1a5" target="_blank" className="contact-link">Raadwan Masum</a></h1>
                            <h1 className="contact">Github: <a href="https://github.com/raad1masum" target="_blank" className="contact-link">raad1masum</a></h1>
                            <h1 className="contact">Devpost: <a href="https://devpost.com/raad1masum" target="_blank" className="contact-link">Raadwan Masum</a></h1>
                            <h1 className="contact">Youtube: <a href="https://www.youtube.com/channel/UCqkuaow2vqa6b9iSaAS0VKQ?view_as=subscriber" target="_blank" className="contact-link">Raadwan Masum</a></h1>
                            <h1 className="contact" style={{ marginBottom: '10px' }}>Instagram: <a href="https://www.instagram.com/raad1masum/" target="_blank" className="contact-link">raad1masum</a>
                            </h1>
                        </div>
                    </div>
                    <div style={{ textAlign: 'center', margin: '20px 0' }}>
                        <footer>
                            Copyright © Raadwan Masum
              </footer>
                    </div>
                </div></div></div>
    );
}

export default App;