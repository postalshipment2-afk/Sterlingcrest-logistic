// import { useState, useEffect } from "react";
// import { supabase } from "../../../lib/supabase";

// export default function Bankaccount() {
//   const [accountType, setAccountType] = useState("local");
//   const [loading, setLoading] = useState(false);
//   const [recordId, setRecordId] = useState(null);
//   const [message, setMessage] = useState({ text: "", type: "" });

//   const [formData, setFormData] = useState({
//     account_holder_name: "",
//     bank_name: "",
//     routing_number: "",
//     account_number: "",
//     account_type_checking: "checking",
//     swift_bic: "",
//     iban: "",
//     country: "",
//     beneficiary_address: "",
//     bank_address: "",
//     bank_branch: "",
//   });

//   // Fetch existing bank details on component mount to support editing
//   useEffect(() => {
//     async function fetchExistingDetails() {
//       try {
//         const { data, error } = await supabase
//           .from("bank_details")
//           .select("*")
//           .limit(1)
//           .maybeSingle();

//         if (error) throw error;

//         if (data) {
//           setRecordId(data.id);
//           setAccountType(data.account_type || "local");
//           setFormData({
//             account_holder_name: data.account_holder_name || "",
//             bank_name: data.bank_name || "",
//             routing_number: data.routing_number || "",
//             account_number: data.account_number || "",
//             account_type_checking: data.account_type_checking || "checking",
//             swift_bic: data.swift_bic || "",
//             iban: data.iban || "",
//             country: data.country || "",
//             beneficiary_address: data.beneficiary_address || "",
//             bank_address: data.bank_address || "",
//             bank_branch: data.bank_branch || "",
//           });
//         }
//       } catch (err) {
//         console.error("Error fetching existing bank details:", err);
//       }
//     }

//     fetchExistingDetails();
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setMessage({ text: "", type: "" });

//     // Payload structure based on account type, explicitly clearing unused fields
//     const payload = {
//       account_type: accountType,
//       account_holder_name: formData.account_holder_name,
//       bank_name: formData.bank_name,
//       routing_number: accountType === "local" ? formData.routing_number : null,
//       account_number: accountType === "local" ? formData.account_number : null,
//       account_type_checking:
//         accountType === "local" ? formData.account_type_checking : null,
//       swift_bic: accountType === "international" ? formData.swift_bic : null,
//       iban: accountType === "international" ? formData.iban : null,
//       country: accountType === "international" ? formData.country : null,
//       beneficiary_address: formData.beneficiary_address || null,
//       bank_address: formData.bank_address || null,
//       bank_branch: formData.bank_branch || null,
//     };

//     try {
//       let error;

//       if (recordId) {
//         // Update existing record
//         const res = await supabase
//           .from("bank_details")
//           .update(payload)
//           .eq("id", recordId);
//         error = res.error;
//       } else {
//         // Insert new record if none existed
//         const res = await supabase
//           .from("bank_details")
//           .insert([payload])
//           .select()
//           .single();
//         error = res.error;
//         if (res.data) {
//           setRecordId(res.data.id);
//         }
//       }

//       if (error) throw error;

//       setMessage({
//         text: recordId
//           ? "Bank details updated successfully!"
//           : "Bank details saved successfully!",
//         type: "success",
//       });
//     } catch (err) {
//       setMessage({
//         text: err instanceof Error ? err.message : "Failed to save details.",
//         type: "error",
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-md border border-gray-100 my-8">
//       <h2 className="text-2xl font-bold text-gray-800 mb-2">
//         Bank Account Information
//       </h2>
//       <p className="text-sm text-gray-500 mb-6">
//         Select your transfer destination type and enter your secure banking
//         credentials.
//       </p>

//       {/* Account Type Selector Tabs */}
//       <div className="flex rounded-lg bg-gray-100 p-1 mb-6">
//         <button
//           type="button"
//           onClick={() => setAccountType("local")}
//           className={`flex-1 py-2.5 text-sm font-medium rounded-md transition-all ${
//             accountType === "local"
//               ? "bg-white text-blue-600 shadow-sm"
//               : "text-gray-600 hover:text-gray-900"
//           }`}
//         >
//           Local Bank Account
//         </button>
//         <button
//           type="button"
//           onClick={() => setAccountType("international")}
//           className={`flex-1 py-2.5 text-sm font-medium rounded-md transition-all ${
//             accountType === "international"
//               ? "bg-white text-blue-600 shadow-sm"
//               : "text-gray-600 hover:text-gray-900"
//           }`}
//         >
//           International (SWIFT / IBAN)
//         </button>
//       </div>

//       {message.text && (
//         <div
//           className={`p-4 mb-4 text-sm rounded-lg ${
//             message.type === "success"
//               ? "bg-green-50 text-green-700 border border-green-200"
//               : "bg-red-50 text-red-700 border border-red-200"
//           }`}
//         >
//           {message.text}
//         </div>
//       )}

//       <form onSubmit={handleSubmit} className="space-y-4">
//         {/* Common Fields */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Beneficiary Name
//           </label>
//           <input
//             type="text"
//             name="account_holder_name"
//             required
//             value={formData.account_holder_name}
//             onChange={handleChange}
//             placeholder="John Doe"
//             className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Bank Name
//           </label>
//           <input
//             type="text"
//             name="bank_name"
//             required
//             value={formData.bank_name}
//             onChange={handleChange}
//             placeholder="Chase Bank / Barclays"
//             className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"
//           />
//         </div>

//         {/* Local Option Fields */}
//         {accountType === "local" && (
//           <>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Routing Number
//                 </label>
//                 <input
//                   type="text"
//                   name="routing_number"
//                   //   required
//                   value={formData.routing_number}
//                   onChange={handleChange}
//                   placeholder="9 digits"
//                   className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Account Number
//                 </label>
//                 <input
//                   type="text"
//                   name="account_number"
//                   required
//                   value={formData.account_number}
//                   onChange={handleChange}
//                   placeholder="••••••••••••"
//                   className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"
//                 />
//               </div>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Account Type
//               </label>
//               <select
//                 name="account_type_checking"
//                 value={formData.account_type_checking}
//                 onChange={handleChange}
//                 className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm bg-white"
//               >
//                 <option value="checking">Checking</option>
//                 <option value="savings">Savings</option>
//                 <option value="business">Business</option>
//               </select>
//             </div>
//           </>
//         )}

//         {/* International Option Fields */}
//         {accountType === "international" && (
//           <>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   SWIFT / BIC Code
//                 </label>
//                 <input
//                   type="text"
//                   name="swift_bic"
//                   // required
//                   value={formData.swift_bic}
//                   onChange={handleChange}
//                   placeholder="8 or 11 characters"
//                   className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm uppercase"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Country
//                 </label>
//                 <input
//                   type="text"
//                   name="country"
//                   required
//                   value={formData.country}
//                   onChange={handleChange}
//                   placeholder="United Kingdom / Germany"
//                   className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"
//                 />
//               </div>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Account Number
//               </label>
//               <input
//                 type="text"
//                 name="account_number"
//                 required
//                 value={formData.account_number}
//                 onChange={handleChange}
//                 placeholder="••••••••••••"
//                 className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 BENEFICIARY ADDRESS
//               </label>
//               <input
//                 type="text"
//                 name="beneficiary_address"
//                 required
//                 value={formData.beneficiary_address}
//                 onChange={handleChange}
//                 placeholder=" YOUR BENEFICIARY ADDRESS"
//                 className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm uppercase"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 IBAN
//               </label>
//               <input
//                 type="text"
//                 name="iban"
//                 // required
//                 value={formData.iban}
//                 onChange={handleChange}
//                 placeholder="GB29 NWBK 6016 1331 9268 19"
//                 className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm uppercase"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 BANK ADDRESS
//               </label>
//               <input
//                 type="text"
//                 name="bank_address"
//                 required
//                 value={formData.bank_address}
//                 onChange={handleChange}
//                 placeholder="123 Main Street, City, Country"
//                 className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm uppercase"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 BANK BRANCH
//               </label>
//               <input
//                 type="text"
//                 name="bank_branch"
//                 required
//                 value={formData.bank_branch}
//                 onChange={handleChange}
//                 placeholder=" Branch Name"
//                 className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm uppercase"
//               />
//             </div>
//           </>
//         )}

//         <button
//           type="submit"
//           disabled={loading}
//           className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-lg transition-colors duration-200 text-sm shadow-sm disabled:opacity-50"
//         >
//           {loading
//             ? "Saving..."
//             : recordId
//               ? "Update Bank Details"
//               : "Save Bank Details"}
//         </button>
//       </form>
//     </div>
//   );
// }
