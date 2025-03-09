import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/foolishmind_logo_image_circle.png"
          alt="FoolishMind logo"
          width={180}
          height={38}
          priority
        />
        <h1 className="text-2xl sm:text-4xl font-bold">풀리시 마인드</h1>

        <section className="flex flex-col gap-8">
          <h2 className="text-xl sm:text-3xl font-bold">앱/서비스 개발</h2>
          <section className="flex flex-col gap-2">
            <h3 className="text-xl sm:text-2xl font-bold">응원봉</h3>
            <p className="text-sm sm:text-base">
              블루투스를 기반으로 아이돌 응원봉을 제어하는 앱
            </p>
            <ul className="list-disc list-inside text-sm sm:text-base space-y-4">
              <li className="flex items-center gap-4">
                <Image src="/highlight.webp" alt="Highlight Light Stick" width={60} height={60} />
                <div>
                  하이라이트: <a href="https://apps.apple.com/app/highlight-light-stick/id1623935223" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Highlight Light Stick</a>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <Image src="/limyoungwoong.webp" alt="임영웅 응원봉" width={60} height={60} />
                <div>
                  임영웅: <a href="https://apps.apple.com/app/임영웅-응원봉/id1620771450" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">임영웅 응원봉</a>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <Image src="/paulkim.webp" alt="Paul Kim Light" width={60} height={60} />
                <div>
                  폴킴: <a href="https://apps.apple.com/app/paul-kim-light/id6450698392" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Paul Kim Light</a>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <Image src="/ateez.webp" alt="Ateez Lightiny" width={60} height={60} />
                <div>
                  Ateez: <a href="https://apps.apple.com/app/ateez-lightiny/id6443964628" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Ateez Lightiny</a>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <Image src="/leesungyoon.webp" alt="이승윤 응원봉" width={60} height={60} />
                <div>
                  이승윤: <a href="https://apps.apple.com/app/이승윤-응원봉/id6450698505" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">이승윤 응원봉</a>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <Image src="/xikers.webp" alt="Xikers Official Light Stick" width={60} height={60} />
                <div>
                  Xikers: <a href="https://apps.apple.com/app/xikers-official-light-stick/id6479165774" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Xikers Official Light Stick</a>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <Image src="/triples.webp" alt="TripleS Official Light Stick" width={60} height={60} />
                <div>
                  TripleS: <a href="https://apps.apple.com/app/triples-official-light-stick/id6503432587" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">TripleS Official Light Stick</a>
                </div>
              </li>
            </ul>
          </section>
        </section>

        <section className="flex flex-col gap-8">
          <h2 className="text-xl sm:text-3xl font-bold">강의</h2>
          <section className="flex flex-col gap-2">
            <h3 className="text-xl sm:text-2xl font-bold">한양대학교 컴퓨터소프트웨어 2023</h3>
            <p className="text-sm sm:text-base">
              2023년 학기 수업으로 등록된 앱
            </p>
            <ul className="list-disc list-inside text-sm sm:text-base space-y-4">
              <li className="flex items-center gap-4">
                <Image src="/aquarium.webp" alt="Aquarium Widget" width={60} height={60} />
                <div>
                  <strong>아쿠아리움 위젯:</strong> 도트 맵 스타일의 물고기 위젯과 낚시 - <a href="https://apps.apple.com/kr/app/aquarium-widget/id6472689219" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">App Store Link</a>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <Image src="/book_record.webp" alt="책과 나의 조각" width={60} height={60} />
                <div>
                  <strong>책과 나의 조각:</strong> 독서 기록하기 - <a href="https://apps.apple.com/kr/app/책과-나의-조각-편한-독서-기록/id6474217358" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">App Store Link</a>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <Image src="/palette.webp" alt="Palette" width={60} height={60} />
                <div>
                  <strong>팔레트:</strong> 감정을 색으로 기록하고 어울리는 음악 추천 - <a href="https://apps.apple.com/kr/app/palette/id6472627297" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">App Store Link</a>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <Image src="/cuckoo.webp" alt="Cuckoo" width={60} height={60} />
                <div>
                  <strong>Cuckoo:</strong> 쉽고 간단한 메모와 앱 정보 수집 및 공유 - <a href="https://apps.apple.com/kr/app/cuckoo/id6472627769" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">App Store Link</a>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <Image src="/seasoning.webp" alt="Seasoning" width={60} height={60} />
                <div>
                  <strong>Seasoning:</strong> 목표 달성을 위한 시즌과 세부 목표 설정하기 - <a href="https://apps.apple.com/kr/app/시즈닝/id6474628562" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">App Store Link</a>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <Image src="/ideanetworking.webp" alt="Idea Networking" width={60} height={60} />
                <div>
                  <strong>Idea Networking:</strong> 아이디어를 기반으로 팀 매칭 - <a href="https://apps.apple.com/kr/app/ideanetworking/id6472627149" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">App Store Link</a>
                </div>
              </li>
            </ul>

          </section>
        </section>

      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          href="mailto:foolishmindcorp@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact Us: foolishmindcorp@gmail.com
        </a>
      </footer>
    </div>
  );
}
