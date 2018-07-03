import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
import com.kms.katalon.core.checkpoint.CheckpointFactory as CheckpointFactory
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as MobileBuiltInKeywords
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testcase.TestCaseFactory as TestCaseFactory
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testdata.TestDataFactory as TestDataFactory
import com.kms.katalon.core.testobject.ObjectRepository as ObjectRepository
import com.kms.katalon.core.testobject.TestObject as TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WSBuiltInKeywords
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUiBuiltInKeywords
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import internal.GlobalVariable as GlobalVariable
import org.openqa.selenium.Keys as Keys

WebUI.openBrowser('')

WebUI.navigateToUrl('http://58.87.123.210:8008/')

WebUI.setText(findTestObject('RecipeFinderTestObject/OnlineTest/Page_Recipe Finder/input_itemCount'), '5')

WebUI.click(findTestObject('RecipeFinderTestObject/OnlineTest/Page_Recipe Finder/button_Confirm'))

WebUI.setText(findTestObject('RecipeFinderTestObject/OnlineTest/Page_Recipe Finder/input_item'), 'bread')

WebUI.setText(findTestObject('RecipeFinderTestObject/OnlineTest/Page_Recipe Finder/input_amount'), '10')

WebUI.selectOptionByValue(findTestObject('RecipeFinderTestObject/OnlineTest/Page_Recipe Finder/select_ofgramsmlslices'), 
    'slices', true)

WebUI.setText(findTestObject('RecipeFinderTestObject/OnlineTest/Page_Recipe Finder/input_item_1'), 'cheese')

WebUI.setText(findTestObject('RecipeFinderTestObject/OnlineTest/Page_Recipe Finder/input_amount_1'), '10')

WebUI.selectOptionByValue(findTestObject('RecipeFinderTestObject/OnlineTest/Page_Recipe Finder/select_ofgramsmlslices_1'), 
    'slices', true)

WebUI.setText(findTestObject('RecipeFinderTestObject/OnlineTest/Page_Recipe Finder/input_item_2'), 'butter')

WebUI.setText(findTestObject('RecipeFinderTestObject/OnlineTest/Page_Recipe Finder/input_amount_2'), '250')

WebUI.selectOptionByValue(findTestObject('RecipeFinderTestObject/OnlineTest/Page_Recipe Finder/select_ofgramsmlslices_2'), 
    'grams', true)

WebUI.setText(findTestObject('RecipeFinderTestObject/OnlineTest/Page_Recipe Finder/input_where'), 'peanut')

WebUI.setText(findTestObject('RecipeFinderTestObject/OnlineTest/Page_Recipe Finder/input_item_3'), 'butter')

WebUI.setText(findTestObject('RecipeFinderTestObject/OnlineTest/Page_Recipe Finder/input_amount_3'), '250')

WebUI.selectOptionByValue(findTestObject('RecipeFinderTestObject/OnlineTest/Page_Recipe Finder/select_ofgramsmlslices_3'), 
    'grams', true)

WebUI.setText(findTestObject('RecipeFinderTestObject/OnlineTest/Page_Recipe Finder/input_where_1'), 'mixed')

WebUI.setText(findTestObject('RecipeFinderTestObject/OnlineTest/Page_Recipe Finder/input_item_4'), 'salad')

WebUI.setText(findTestObject('RecipeFinderTestObject/OnlineTest/Page_Recipe Finder/input_amount_4'), '150')

WebUI.selectOptionByValue(findTestObject('RecipeFinderTestObject/OnlineTest/Page_Recipe Finder/select_ofgramsmlslices_4'), 
    'grams', true)

WebUI.setText(findTestObject('RecipeFinderTestObject/OnlineTest/Page_Recipe Finder/input_recipesCount'), '2')

WebUI.click(findTestObject('RecipeFinderTestObject/OnlineTest/Page_Recipe Finder/button_Confirm_1'))

WebUI.setText(findTestObject('RecipeFinderTestObject/OnlineTest/Page_Recipe Finder/input_name1'), 'grilled cheese on toast')

WebUI.setText(findTestObject('RecipeFinderTestObject/OnlineTest/Page_Recipe Finder/input_1itemCount'), '2')

WebUI.click(findTestObject('RecipeFinderTestObject/OnlineTest/Page_Recipe Finder/input_1itemCountConfirm'))

WebUI.setText(findTestObject('RecipeFinderTestObject/OnlineTest/Page_Recipe Finder/input_item_5'), 'bread')

WebUI.setText(findTestObject('RecipeFinderTestObject/OnlineTest/Page_Recipe Finder/input_amount_5'), '2')

WebUI.selectOptionByValue(findTestObject('RecipeFinderTestObject/OnlineTest/Page_Recipe Finder/select_ofgramsmlslices_5'), 
    'slices', true)

WebUI.setText(findTestObject('RecipeFinderTestObject/OnlineTest/Page_Recipe Finder/input_item_6'), 'cheese')

WebUI.setText(findTestObject('RecipeFinderTestObject/OnlineTest/Page_Recipe Finder/input_amount_6'), '2')

WebUI.selectOptionByValue(findTestObject('RecipeFinderTestObject/OnlineTest/Page_Recipe Finder/select_ofgramsmlslices_6'), 
    'slices', true)

WebUI.setText(findTestObject('RecipeFinderTestObject/OnlineTest/Page_Recipe Finder/input_name0'), 'salad sandwich')

WebUI.setText(findTestObject('RecipeFinderTestObject/OnlineTest/Page_Recipe Finder/input_0itemCount'), '2')

WebUI.click(findTestObject('RecipeFinderTestObject/OnlineTest/Page_Recipe Finder/input_0itemCountConfirm'))

WebUI.setText(findTestObject('RecipeFinderTestObject/OnlineTest/Page_Recipe Finder/input_item_7'), 'bread')

WebUI.setText(findTestObject('RecipeFinderTestObject/OnlineTest/Page_Recipe Finder/input_amount_7'), '2')

WebUI.selectOptionByValue(findTestObject('RecipeFinderTestObject/OnlineTest/Page_Recipe Finder/select_ofgramsmlslices_7'), 
    'slices', true)

WebUI.setText(findTestObject('RecipeFinderTestObject/OnlineTest/Page_Recipe Finder/input_item_8'), 'mixed salad')

WebUI.setText(findTestObject('RecipeFinderTestObject/OnlineTest/Page_Recipe Finder/input_amount_8'), '100')

WebUI.selectOptionByValue(findTestObject('RecipeFinderTestObject/OnlineTest/Page_Recipe Finder/select_ofgramsmlslices_8'), 
    'grams', true)

WebUI.click(findTestObject('RecipeFinderTestObject/OnlineTest/Page_Recipe Finder/input_submitButton'))

WebUI.click(findTestObject('RecipeFinderTestObject/OnlineTest/Page_Recipe Finder/button_Retry'))

WebUI.closeBrowser()

