
export const ProductFilterSidebar = ({
    priceRange,
    setPriceRange,
    selectedPublisher,
    setSelectedPublisher,
    selectedTopic,
    setSelectedTopic
}) => {
    const publishers = [
        { name: 'গ্রন্থ কুটির', count: 686 },
        { name: 'পাঞ্জেরী পাবলিকেশন্স লিমিটেড', count: 677 },
        { name: 'ইসলামিয়া কুতুবখানা', count: 531 },
        { name: 'মাকতাবাতুল ফাতাহ বাংলাদেশ', count: 491 }
    ];

    const topics = [
        { name: 'দাওরায়ে হাদীস', count: 427 },
        { name: 'জামাতে কাফিয়া', count: 326 },
        { name: 'জামাতে মিযান', count: 302 },
        { name: 'জামাতে তাইসীর', count: 300 }
    ];

    return (
        <aside className="w-full lg:w-64 shrink-0 space-y-6">
            {/* Price Range Filter */}
            <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
                <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-3">Price Range</h3>
                <div className="space-y-3">
                    <input
                        type="range"
                        min="0"
                        max="30000"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                        className="w-full accent-red-600 h-1 bg-slate-200 rounded-lg cursor-pointer"
                    />
                    <div className="flex items-center gap-2 text-xs">
                        <input
                            type="number"
                            value={priceRange[0]}
                            readOnly
                            className="w-1/2 p-1.5 border border-slate-200 rounded text-center text-slate-700 bg-slate-50"
                        />
                        <span className="text-slate-400">-</span>
                        <input
                            type="number"
                            value={priceRange[1]}
                            readOnly
                            className="w-1/2 p-1.5 border border-slate-200 rounded text-center text-slate-700 bg-slate-50"
                        />
                    </div>
                </div>
            </div>

            {/* Publisher Filter */}
            <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
                <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-3">প্রকাশক</h3>
                <div className="space-y-2 max-h-48 overflow-y-auto no-scrollbar">
                    {publishers.map((pub, idx) => (
                        <label key={idx} className="flex items-center justify-between text-xs text-slate-700 hover:text-red-600 cursor-pointer">
                            <div className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="publisher"
                                    checked={selectedPublisher === pub.name}
                                    onChange={() => setSelectedPublisher(pub.name)}
                                    className="accent-red-600"
                                />
                                <span>{pub.name}</span>
                            </div>
                            <span className="text-slate-400">({pub.count})</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Topics Filter */}
            <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
                <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-3">বিষয় সমূহ</h3>
                <div className="space-y-2 max-h-48 overflow-y-auto no-scrollbar">
                    {topics.map((topic, idx) => (
                        <label key={idx} className="flex items-center justify-between text-xs text-slate-700 hover:text-red-600 cursor-pointer">
                            <div className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="topic"
                                    checked={selectedTopic === topic.name}
                                    onChange={() => setSelectedTopic(topic.name)}
                                    className="accent-red-600"
                                />
                                <span>{topic.name}</span>
                            </div>
                            <span className="text-slate-400">({topic.count})</span>
                        </label>
                    ))}
                </div>
            </div>
        </aside>
    );
};