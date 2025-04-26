export default function Projects() {
  return (
    <section id="projects" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">কার্যক্রম</h2>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card mb-4 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">প্রোজেক্ট-০০১: ইসরায়েলি পণ্য বয়কট</h5>
                <p className="card-text">
                  প্রোজেক্ট-০০১ ছিল আমাদের কমিউনিটির প্রথম উদ্যোগ, যেখানে ইসরায়েলি পণ্য বয়কট এবং বিকল্প ব্যবহারের বার্তা ছড়িয়ে দিতে গোবিন্দগঞ্জ উপজেলার ব্যস্ত মসজিদগুলোতে সচেতনতামূলক ব্যানার ও প্যানা স্থাপন করা হয়েছে।
                </p>
                <a href="https://photos.google.com/share/AF1QipM2LLB3zLxCsRaS-EwgpViqaCTRf5DvS0lzhW8enfUI4FUBDtTIg38R1eM0rFle7A?key=TDZyMUp3TWgxcFBHWWtxNlAyZFQ2QV96VzFBVFRR" target="_blank" rel="noopener noreferrer">
                  Photos
                </a>
              </div>
            </div>
            {/* Add more project cards here if needed */}
          </div>
        </div>
      </div>
    </section>
  );
}