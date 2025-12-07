// src/pages/tracking/TrackParcel.jsx

const TrackParcel = () => {
  return (
    <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-6 space-y-4">
      <h1 className="text-2xl font-semibold text-gray-900">Track Your Parcel</h1>
      <p className="text-sm text-gray-500">
        Tracking ID দিয়ে তোমার পার্সেল কোথায় আছে এখন তা দেখো।
      </p>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="Enter Tracking ID"
          className="input input-bordered w-full"
        />
        <button type="submit" className="btn btn-primary w-full">
          Track Now
        </button>
      </form>
    </div>
  )
}

export default TrackParcel;
